import React from 'react';
import styled from 'styled-components';


function ChatMessage({text,name,image,timestamp}) {
    return (
        <Container>
           <UserAvatar>
               <img src={image} alt='Random user'/>
           </UserAvatar>
           <MessageContent>
               <Name>
                {name}
                   <span>
                       {new Date(timestamp.toDate()).toUTCString()}
                   </span>
               </Name>
               <Text>
                   {text}
               </Text>

           </MessageContent>
            
        </Container>
            
        
    );
}

export default ChatMessage;

const Container=styled.div `
padding:8px 20px;
display:flex;
align-items:center;
:hover {
    background:linear-gradient(to right,purple, grey);
}
`

const UserAvatar=styled.div `
width:36px;
height:36px;
border-radius:2px;
overflow:hidden;
margin-right:8px;
transition-property:transform;
transition-duration:1s;

img {
    width:100%;
    
    
    

}
:hover {
    transform:scale(1.5,1.5);
}
`

const MessageContent=styled.div `
display:flex;
flex-direction:column;`

const Name=styled.span `
font-weight:900; 
font-size:15px;
line-height:1.4;
span {
    font-weight:400;
    color:rgb(97,96,97);
    margin-left:8px;
    font-size:13px;
}
:hover {
    background:linear-gradient(yellow,red);
}
`

const Text=styled.span `
text-shadow:2px 2px 2px purple;
`