import React from "react";
import MessageBox from './MessageBox'
import Messages from './Messages'
import useChat from './_useChat'

const Chat = () => {
  const { messages, sendMessage} = useChat()
  return (
    <div>
    <Messages messages={messages}/>
  <MessageBox onSendMessage={message=> {
    // alert('Message sent:' + message
    sendMessage({message})
  }} />
  </div>
)
};

export default Chat;
