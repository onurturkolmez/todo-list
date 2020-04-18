import React from 'react';
import './index.css';
import { Props } from './types';

const MessageBox = ({
  type,
  text
}: Props) => {

  console.log("MessageBox", "type", type, "text", text);


  const remove = (box: any) => {
    if (box) {
      box.parentElement.style.display = "none";
    }
  }

  setTimeout(() => {
    let elements = document.getElementsByClassName("close");
    remove(elements[0]);
  }, 4000);

  return (
    <div
      className={`message-box ${type}`}>
      <p>{text}</p>
      <span
        onClick={(e: any) => { remove(e.target); }}
        className="close">x</span>
    </div>
  )

}

export default MessageBox;
