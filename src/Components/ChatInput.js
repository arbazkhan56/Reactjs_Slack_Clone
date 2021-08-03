import React, {useState} from 'react'
import styled from 'styled-components'
import {Button } from '@material-ui/core';
import { db } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import MicIcon from '@material-ui/icons/Mic';
function ChatInput( channelId, chatRef) {
    const [input, setInput] =useState("");
    const [user] = useAuthState(auth);
    const sendMessage = e => {
        e.preventDefault();

        if(!channelId){
            return false;
        }

        db.collection("rooms").doc(channelId).collection("message").add({message: input, user: user.displayName,
        userImage: user.photoURL, 
        
        });

        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');
    };

    return (
        <>
        
        <ChatInputContainer>
                
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder = {'Type Your message'}  />
                <MicIcon />
                <Button hidden type = "submit" onclick={sendMessage}>
                    Send
                </Button>
               
            </form>
            {/* <Microphone>
            <MicIcon />
        </Microphone> */}
        </ChatInputContainer>
        </>
       
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    >form > input {
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
    > form .MuiSvgIcon-root {
        margin-top: 320px;
        margin-left: 900px;
        z-index: 10;
        font-size: 35px;
    }
`;

// const Microphone =styled.div`
//     margin-top: 320px;
//     margin-left: 135px;
    
// `;