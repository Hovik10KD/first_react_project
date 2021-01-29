import { Profiler } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile profilePage={props.appState.profilePage}
                                                      addPost={props.addPost} 
                                                      updateNewPostText={props.updateNewPostText}/>} />
        <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.appState.dialogsPage}
                                                      addMessage={props.addMessage}
                                                      updateNewMessageText={props.updateNewMessageText}/>} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
