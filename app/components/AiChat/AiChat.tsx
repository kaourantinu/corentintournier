import MessageForm from './MessageForm'
import MessagesList from './MessagesList'
import { MessagesProvider } from '../../utils/useMessages'
import styles from './AiChat.module.css'
import Experience from './3D/Experience'

export default function AiChat(){

  return (
    <div id={styles.aichat}>
      <div id={styles.avatar}>
        <Experience/>
      </div>
      <div id={styles.chat}>
        <MessagesProvider>
          <MessagesList/>
          <MessageForm/>
        </MessagesProvider>
      </div>
    </div>
  )
}