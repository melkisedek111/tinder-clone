import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatsScreen.css";
function ChatsScreen() {
    const [input, setInput] = useState('');
	const [messages, setMessages] = useState([
		{
			name: "Ellen",
			image:
				"https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			message: "Whats up yow",
		},
		{
			name: "Ellen",
			image:
				"https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			message: "Whats up man",
		},
		{
			message: "im good",
		},
    ]);
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }
	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">
				YOU MATCHED WITH ELLEN ON 10/10/20
			</p>
			{messages.map((message) =>
				message.name ? (
					<div className="chatScreen__message">
						<Avatar
							className="chatScreen_image"
							alt={message.name}
							src={message.image}
						/>
						<p className="chatScreen__text">{message.message}</p>
					</div>
				) : (
					<div className="chatScreen__message">
						<p className="chatScreen__textUser">{message.message}</p>
					</div>
				)
			)}
			<form className="chatScreen__input">
				<input
					type="text"
					className="chatScreen__inputField"
					placeholder="Type a messge . . . "
                    value={input}
                    onChange={e => setInput(e.target.value)}
				/>
				<button className="chatScreen__inputButton" onClick={handleSend}>SEND</button>
			</form>
		</div>
	);
}

export default ChatsScreen;
