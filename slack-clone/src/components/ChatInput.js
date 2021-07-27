import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Madara",
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkqobnD21zt3Q81pl0vurK6j7vsN91F4mYA&usqp=CAU",
    });
    chatRef.current.scrollIntoView({
      behaviour: "smooth",
    });
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          placeholder={`Message#${channelName}`}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" hidden onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;