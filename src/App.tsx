import React, {DataHTMLAttributes} from 'react';
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
import {AppState} from "./redux/state";



type AppStateType = {

   appstate: AppState

}








function App(props: AppStateType) {
debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile propfilePage={props.appstate.propfilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.appstate.dialogsPage.dialogs}
                                                                  messages={props.appstate.dialogsPage.messages}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
