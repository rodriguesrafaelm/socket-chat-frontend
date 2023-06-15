import React from 'react';
import styles from '../../../../styles/main.module.css'

interface TimedOutMessageProps {
  connected: boolean
}

const TimedOutMessage = () => {
  return (
      <div className={styles.connectionError}>
        Você foi desconectado por inatividade, atualize a página e tente novamente.
      </div>
    );
};

export default TimedOutMessage;