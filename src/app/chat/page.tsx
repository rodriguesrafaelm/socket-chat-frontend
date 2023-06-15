"use client"
import React, {useEffect, useState, FormEvent} from 'react';
import UserList from './components/UserList';
import MessageInput from './components/MessageInput';
import MessageDisplay from './components/MessageDisplay';
import styles from '../../../styles/main.module.css';
import io, { Socket }  from 'socket.io-client';
import TryingToConnect from './components/TryingToConnect';
import TimedOutMessage from './components/TimedOutMessage';

function Chat() {
  const [username, setUsername] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [timeoutConnection, setTimeoutConnection] = useState<boolean>(false)
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const url = "http://localhost:4000";

  const handleUsernameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setShowChat(true);
    }
  };

  useEffect(() => {
  if (showChat && !socket){
  const newSocket = io(url, { query: {
    username: username
    },
  transports: ['websocket'] 
  });
  setSocket(newSocket);
}
}
, [showChat, username, socket]);

useEffect(() => {
  socket?.on('timeoutError', () => {
    console.log('111')
    setTimeoutConnection(true)
  })
  socket?.on('connect', () => setConnected(true))
  socket?.on('disconnect', () => setConnected(false))
},[socket,showChat]);

  if (showChat){
  return (
    <div className={styles.chatMaster}>
      <div className={connected ? '' : styles.screenCover}>
      {timeoutConnection ? ( <TimedOutMessage />)
      : 
      (!connected && !timeoutConnection ? <TryingToConnect /> : null)}
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.userBox}>
          <UserList socket={socket}/>
        </div>
        <div className={styles.userInputs}>
          <div className={styles.messageBox}>
            <MessageDisplay socket={socket}/>
          </div>
          <div className={styles.inputBox}>
            <MessageInput socket={socket} username={username} />
          </div>
        </div>
      </div>
    </div>
  );
  } else {
    return (
      <div className={styles.usernamePrompt}>
        <div className={styles.usernamePromptTitle}>
          <p>Socket.io simple chat</p>
        </div>
        <form onSubmit={handleUsernameSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

}

export default Chat;