import React from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  console.log({ text });
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: "しょご", text });
        setText("");
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
