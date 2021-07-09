import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import ChatPage from './page/ChatPage'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/chat' component={ChatPage}/>
          <Route path='/' component={LoginPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
