"use client"

import React from 'react';
import UserList from './UserList';
import MessageInput from './MessageInput';
import MessageDisplay from './MessageDisplay';
import styles from '../../../styles/main.module.css'
import io from 'socket.io-client'

const url = "http://localhost:4000"
const socket = io(url, { query: {
  username: 'User'
  },
transports: ['websocket'] });
function Chat() {
  return (
    <div className={styles.chatMaster}>
        <div className={styles.chatContainer}>
            <div className={styles.userBox}>
                <UserList socket={socket}/>
            </div>
            <div className={styles.userInputs}>
                <div className={styles.messageBox}>
                <MessageDisplay socket={socket}/>
                </div>
                <div className={styles.inputBox}>
                <MessageInput socket={socket} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Chat;