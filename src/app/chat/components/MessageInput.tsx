import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/main.module.css'
import { Socket } from 'socket.io-client';

interface Mensagem {
  username: string,
  message: string
}

interface MessageInputProps {
  socket: Socket | undefined;
  username: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ socket, username }) => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key == 'Enter'){
      event.preventDefault()
      enviarMensagem()
    }
  }

  const enviarMensagem = () => {
    const textArea = document.getElementById('textareaContent') as HTMLTextAreaElement;
    const formatedContent = textArea.value.trim();
    if (formatedContent !== '') {
      socket?.emit('message', { username: username, message: formatedContent });
      textArea.value = '';
    }
  }

  return (
    <div className={styles.messageInput}>
      <textarea id="textareaContent" className={styles.messageText} rows={8} maxLength={200} placeholder="Digite sua mensagem" onKeyDown={handleKeyDown} />
      <button onClick={enviarMensagem} className={styles.messageButton}>Enviar</button>
    </div>
  )
}

export default MessageInput;