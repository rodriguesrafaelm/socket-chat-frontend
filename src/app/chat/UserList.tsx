import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import styles from '../../../styles/main.module.css'

interface UserListProps {
  socket: Socket;
}
interface User {
  id: string;
  username: string;
}

const UserList: React.FC<UserListProps> = ({socket}) => {
  const [users, setUsers] = useState<User[]>([])
  socket.on('userList', (content) => {
    setUsers(content)
  })

  return (
    <div className=''>
      <h3>Usuários Logados</h3>
        <div className={styles.userList}>
            {users.map((user) => {
              return (
              <div key={user.id} className={styles.userName}>
               {user.username}
              </div>)
            })}
        </div>
    </div>
  );
}

export default UserList;