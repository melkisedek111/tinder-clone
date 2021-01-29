import React from 'react'
import Chat from './Chat';
import './Chats.css';
function Chats() {
    return (
        <div className="chats" >
            <Chat name="Ellen" profilePic="https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" timestamp="35 minutes ago" message="helloo world"/>
        </div>
    )
}

export default Chats
