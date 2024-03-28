'use client'

import { useEffect, useRef } from 'react'
import { useMessages } from '../../utils/useMessages'
import styles from './AiChat.module.css'

const MessagesList = () => {

  const { messages, isLoadingAnswer } = useMessages()

  const messagesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messagesList = messagesListRef.current;
    if (messagesList) {
      // Faire défiler automatiquement vers le bas lorsque de nouveaux messages sont ajoutés
      messagesList.scrollTop = messagesList.scrollHeight;
    }
  }, [messages]);

  return (
    <div id={styles.messageslist} ref={messagesListRef}>
      {messages?.map((message: any, index) => {

        const isUser = message.role === 'user'

        if (message.role === 'system') return null

        return (
          <div key={index} className={isUser ? `${styles.message} ${styles.usermessage}` : `${styles.message} ${styles.aimessage}`}>{message.content}</div>
        )
      })}
    </div>
  )
}
export default MessagesList