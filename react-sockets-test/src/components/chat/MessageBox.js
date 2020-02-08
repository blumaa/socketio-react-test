import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const MessageBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <TextField
      label="Message"
      id="message"
      name="message"
      type="text"
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter'){
          e.preventDefault()
          onSendMessage(message);
          setMessage('')
        }
      }}
    />
  );
};

export default MessageBox;
