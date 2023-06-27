import React,  { useState } from 'react';
import InputArea from './InputArea';
import MessageItem from './MessageItem';

function Messages() {
    const [messageItems, setMessageItems] = useState([]);
  
    function addMessage(inputText) {
        setMessageItems(prevItems => {
        return [...prevItems, inputText];
      });
    }
  
  
    return (
      <div className="container">
        <div className="heading">
          <h1>Messages List</h1>
        </div>
        <InputArea onAdd={addMessage} />
        <div>
          <ul>
            {messageItems.map((messageItem, index) => (
              <MessageItem
                key={index}
                id={index}
                text={messageItem}
                
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
export default Messages;