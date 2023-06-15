import React from 'react';
import styles from '../../../../styles/main.module.css'



const TryingToConnect = () => {
  return (
    <div className={styles.connectionError}>
      Aguardando resposta do servidor...
    </div>
  );

};

export default TryingToConnect;