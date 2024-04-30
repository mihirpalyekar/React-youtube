import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
      <img
        className="h-8"
        alt="user-logo"
        src="https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png"
      />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage