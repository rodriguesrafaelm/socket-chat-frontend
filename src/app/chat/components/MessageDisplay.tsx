import React, { useRef, useEffect, useMemo, useState } from 'react';
import styles from '../../../../styles/main.module.css'
import { Socket } from 'socket.io-client';

interface Message {
    username: string,
    message: string
}


interface MessageDisplayProps {
    socket: Socket | undefined
}


const MessageDisplay: React.FC<MessageDisplayProps> = ({ socket })  => {   
    const [messages, setMessages] = useState<Message[]>([])
    const messageContainerRef: React.RefObject<HTMLDivElement> = useRef(null); 

    useEffect(() => {
        const handleMessage = (content: Message[]) => {
            setMessages(content)
        }

        const handleBeforeUnload = () => {
            socket?.disconnect();
            };

        socket?.on('previousMessages', handleMessage);
        socket?.on('message', handleMessage);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            socket?.off('connect');
            socket?.off('message');
            socket?.off('previousMessages');
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
        }, [messages, socket]);

    
    useEffect(() => {
        const messageContainer = messageContainerRef.current;
    
        if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
        }
    }, [messages]);
        
  return (
    <div ref={messageContainerRef} className={styles.messageWindow} id='messageWindow'>
        {messages.map((message: Message, index) => {
            return (<div key={index} className={styles.messageWindowContent}>
                {message.username}: {message.message}
            </div>)
        })}

    </div>
  );
}

export default MessageDisplay