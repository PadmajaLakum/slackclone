import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage'; 
import db from './firebase';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { Photo } from '@material-ui/icons';
import firebase from 'firebase';

function Chat({user}) {
    let {channelId} =useParams();
    const [channel,setChannel]=useState();
    const [messages,setMessages]=useState([]);

    const getMessages=(() => {

        db.collection('rooms').doc(channelId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot)=> {
           let messages=snapshot.docs.map((doc)=>doc.data());
           console.log(messages); 
           setMessages(messages);
        })
    })
    const sendMessage=((text) => {
          if(channelId) {
              let payload= {
                  text:text,
                  user:user.name,
                userImage:user.photo,
                timestamp:firebase.firestore.Timestamp.now()


              }
              db.collection('rooms').doc(channelId).collection('messages').add(payload);
              console.log(payload);
          }
    })

    const getChannel=() => {
        db.collection('rooms').doc(channelId).onSnapshot((snapshot) => {
            
            setChannel(snapshot.data());
        })
    }
    useEffect(()=> { getChannel();
        getMessages();

    },[channelId])
    return (
        <Container>
           <Header>
               <Channel>
                  <ChannelName>
                     # {channel && channel.name}
                  </ChannelName>
                  <ChannelInfo>
                     Info about this specific channel
                  </ChannelInfo>
               </Channel>
               <ChannelDetails>
                  <div>
                     Details

                  </div>
                  <Info />
                  
                  
               </ChannelDetails>

           </Header>
           <MessageContainer>
               {
                   messages.length>0 && messages.map((data,index)=> (

                               
                             <ChatMessage 
                             text={data.text}
                             name={data.user}
                             image={data.userImage}
                             timestamp={data.timestamp}
                             />
                             ))
                   }

           </MessageContainer>
           <ChatInput  sendMessage={sendMessage}/>


           

        </Container>
            
            
        
    );
}

export default Chat;

const Container=styled.div `
display:grid;
grid-template-rows:64px auto min-content;
min=height:0;


`


const Header=styled.div `
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom:1px solid rgba(83,39,83,13);
justify-content:space-between;`



const MessageContainer=styled.div`
display:flex;
flex-direction:column;
overflow-y:scroll;`

const Channel=styled.div ``

const ChannelDetails=styled.div `
display:flex;
align-items:center;
color:#606060;
`

const ChannelName=styled.div `
font-weight:700;

`


const ChannelInfo=styled.div `
font-weight:400;
color:#606060;
font-size:13px;
margin-top:8px;`


const Info=styled(InfoIcon) `
margin-left:10px;

`
