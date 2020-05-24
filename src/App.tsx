import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import News from "./components/ News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

export type PropsType = {
    message: string
    likesCount: number
    id: number
}

export type DialogsType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export type PropsArrayType = {
    posts: Array<PropsType>
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type PropsArrayDialigsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
}

function App(props: PropsArrayType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile posts={props.posts}
                                                                  messages={props.messages}
                                                                  dialogs={props.dialogs}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs}
                                                                  messages={props.messages}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
