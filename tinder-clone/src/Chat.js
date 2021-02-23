import React from 'react';
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Chat({name,message,profilePic,timestamp}){
    return(
        <Link to={`chat/${name}`}>
        <div className="chat">
            <div className="myMessagesDiv">
            <Avatar className="chat__image" src={profilePic}/> 
            <div className='chat__details'>
                <h4>{name}</h4>
                <p>{message}</p>
            </div>

            </div>
            
            
        </div>
        </Link>
        );
}


export default Chat;