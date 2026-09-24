import React, { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  AlertTriangle, 
  BookOpen, 
  HelpCircle,
  RotateCcw
} from "lucide-react";

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const PRESET_QUESTIONS = [
  "林業用地可以蓋露營場管理室嗎？",
  "農地上有合法農舍，可以再申請露營場嗎？",
  "辦理露營場容許使用會影響農保資格或老農津貼嗎？",
  "環境敏感地區 37 項中哪些是查到就絕對不能辦？",
  "無車牌的露營拖車放置在營位上算免建照嗎？"
];

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "您好！我是「新北市非都市土地露營場申辦」AI 法規諮詢顧問。我熟讀新北市觀旅局最新審查手冊與交通部觀光署 114 年 43 題 FAQ 函釋。\n\n您可以隨時詢問我關於：土地編定（農牧/林業/建地）、雙重上限（10% 與 660 ㎡）、19 項絕對禁區、農舍互斥原則、農保資格權益或應備文件！請告訴我您的土地現況或疑難雜症。",
      timestamp: "剛剛"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || inputVal;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInputVal("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend, userPrompt: textToSend })
      });

      if (!response.ok) {
        throw new Error("伺服器回應異常");
      }

      const data = await response.json();
      const replyContent = data.reply || data.answer || "抱歉，目前暫時無法取得答覆，請稍後再試。";

      const aiReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: replyContent,
        timestamp: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, aiReply]);
    } catch (err: any) {
      const errorReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "抱歉，AI 服務連線出現微幅延遲，請確認網路連線或直接查閱系統內的「43 題常見問答」與「申辦手冊」！",
        timestamp: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "welcome",
        sender: "ai",
        text: "諮詢紀錄已清空。請問您有任何非都市土地管制或露營場設置的問題嗎？",
        timestamp: "剛剛"
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-300 flex flex-col h-[640px] max-h-[92vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-white flex items-center gap-1.5">
                <span>AI 露營場申辦法規智能顧問</span>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 px-1.5 py-0.5 rounded">
                  Gemini Powered
                </span>
              </div>
              <div className="text-[11px] text-stone-400">
                依據新北觀旅局最新手冊與交通部觀光署 114 年 43 題 FAQ 訓練
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClearHistory}
              className="text-stone-400 hover:text-stone-200 p-1.5 rounded-lg"
              title="重設對話"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-200 p-1.5 rounded-lg"
              title="關閉視窗"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-stone-50 text-xs sm:text-sm">
          {messages.map((msg) => {
            const isAi = msg.sender === "ai";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAi ? "items-start" : "items-start flex-row-reverse"}`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0 text-xs shadow-xs ${
                    isAi ? "bg-emerald-700" : "bg-stone-800"
                  }`}
                >
                  {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                <div className={`max-w-[85%] space-y-1 ${isAi ? "text-left" : "text-right"}`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line text-left shadow-xs ${
                      isAi
                        ? "bg-white text-stone-900 border border-stone-200 rounded-tl-xs"
                        : "bg-emerald-600 text-white rounded-tr-xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="text-[10px] text-stone-400 px-1 font-mono">
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-stone-200 p-3 rounded-2xl text-xs text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>正在檢索中央法規與新北市手冊規範...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Preset quick question pills */}
        <div className="p-2.5 bg-stone-100 border-t border-stone-200 overflow-x-auto whitespace-nowrap text-xs flex gap-1.5">
          <span className="text-[11px] text-stone-500 font-semibold flex items-center gap-1 pl-1">
            <HelpCircle className="w-3.5 h-3.5" /> 常見快問：
          </span>
          {PRESET_QUESTIONS.map((pq, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(pq)}
              disabled={isLoading}
              className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 rounded-full border border-stone-300 text-[11px] transition-colors"
            >
              {pq}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="請輸入您的土地編定、面積疑問或法規問題..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            disabled={isLoading}
            className="flex-1 px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !inputVal.trim()}
            className="p-2.5 bg-emerald-700 hover:bg-emerald-600 disabled:bg-stone-300 text-white rounded-xl shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
