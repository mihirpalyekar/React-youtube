import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "./../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 200);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
      {ChatMessages.map((ele, index) => (
        <ChatMessage key={index} name={ele.name} message={ele.message.quote} />
      ))}
    </div>
  );
};

export default LiveChat;
