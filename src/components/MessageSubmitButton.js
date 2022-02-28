import React from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, setText, text }) => {
  console.log({ text });
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: "しょご", text });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
