import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'

const useChat = () => {
  const [messages, setMessages ]= useState([])
  const socketRef = useRef()
  useEffect(()=>{
    socketRef.current = socketIOClient('http://localhost:4000')

    socketRef.current.on('newChatMessage', ({message})=> {
      setMessages(messages=> [...messages, message])
    })

    // setTimeout(()=> {
    //   socketRef.currenct.disconnect()
    // }, 2000)
    return () => {
      socketRef.currenct.disconnect()
    }
  }, [])

  const sendMessage = ({message}) => {
    socketRef.current.emit('newChatMessage', {message})
  }

  return { messages, sendMessage}

}

export default useChat
