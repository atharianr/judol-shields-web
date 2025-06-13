import { useCallback, useEffect, useRef } from "react";
import ChatBox from "./components/ChatBox";
import ChatBubble from "./components/ChatBubble";
import SecretModal from "./components/SecretModal";
import { getChatSessionList, sendMessage } from "../services/chat-service";
import { useChat } from "./contexts/ChatContext";
import { useLoading } from "./contexts/LoadingContext";
import { useSecret } from "./contexts/SecretContext";
import { useError } from "./contexts/ErrorContext";
import ErrorModal from "./components/ErrorModal";

export default function PageContent() {
    const {
        chatHistoryList,
        setChatHistoryList,
        chatSessionList,
        setChatSessionList,
        currentChatSessionId,
        setCurrentChatSessionId,
    } = useChat();


    const { isLoadingResponse, setIsLoadingResponse } = useLoading();
    const { secret } = useSecret();

    const { setIsError } = useError();

    const bottomRef = useRef(null);

    const handleChatSubmit = async (newMessage) => {
        setChatHistoryList((prev) => [...prev, { type: "user", content: newMessage }]);

        try {
            setIsLoadingResponse(true);
            const response = await sendMessage(currentChatSessionId, newMessage).finally(() => {
                setIsLoadingResponse(false);
                console.log("currentChatSessionId -> ", currentChatSessionId)
                if (!currentChatSessionId) {
                    getChatSessions();
                }
            });

            setChatHistoryList((prev) => [...prev, { type: "model", content: response.response }]);
        } catch (error) {
            console.error("Failed to get bot reply", error);
            setIsError(true)
            setChatHistoryList((prev) => [
                ...prev,
                { type: "model", content: "Sorry, there was an error processing your message." },
            ]);
        }
    };

    const getChatSessions = useCallback(async () => {
        try {
            const response = await getChatSessionList();
            if (response.data.length > 0) {
                setChatSessionList(response.data);
                if (!currentChatSessionId) {
                    setCurrentChatSessionId(response.data[0].id)
                }
            }
        } catch (error) {
            setIsError(true)
        }
    }, [setChatSessionList]);

    // useEffect(() => {
    //     getChatSessions();
    // }, [getChatSessions]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistoryList]);

    return (
        <div className="flex">
            <ErrorModal />
            {/* TOP */}
            <div className="fixed top-0 left-0 w-screen p-3 shadow-sm z-50 bg-white">
                <img src="./assets/JudolShieldsLogoText.svg" alt="Judol Shields Logo" draggable="false" className="h-12 w-fit" />
            </div>
            {/* CONTENT */}
            <div className="h-screen w-full">
                <div className="flex flex-col items-end h-screen justify-between">
                    <div className="overflow-y-auto w-full pt-20">
                        <div className="flex flex-col mx-auto pt-4 px-4 max-w-2xl w-full">
                            {chatHistoryList.map((data, index) => (
                                <ChatBubble chat={data} key={index} />
                            ))}
                            <ChatBubble chat={{ type: "model", content: "Generating response..." }} className={`${isLoadingResponse ? "block" : "hidden"}`} />
                            <div ref={bottomRef} />
                        </div>
                    </div>
                    <div className="max-w-2xl w-full bottom-0 mb-2 self-center">
                        <ChatBox onChatSubmit={handleChatSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}