// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import ChatsScreen from "./ChatsScreen";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards.jsx";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/chats/:person">
						<Header backButton="/chats" />
						<ChatsScreen />
					</Route>
					<Route exact path="/chats">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						<Header />
						<TinderCards />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
