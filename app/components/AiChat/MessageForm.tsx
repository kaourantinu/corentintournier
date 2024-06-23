'use client'

import { useState } from 'react'
import { useMessages } from '../../utils/useMessages'
import styles from './AiChat.module.css'
import { IoIosSend } from "react-icons/io";

const MessageForm = () => {

  const [content, setContent] = useState('')

  const { addMessage } = useMessages()
  
  const handleSubmit = async (e: any) => {
    e?.preventDefault()
    addMessage(content)
    setContent('')
  }
  
  return (
    <form id={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="content">Your message</label>
        <input name="content" placeholder="Posez votre question ici..." value={content} autoComplete="off" onChange={(e: any) => setContent(e.target.value)}/>
        <button type="submit"><IoIosSend/></button>
    </form>
  )
}
export default MessageForm