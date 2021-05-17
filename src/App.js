import './App.css';
import Header from './Header';
import {Route, Redirect, Switch} from 'react-router-dom';
import { cartItemDetail } from './cartItemDetail';


function App() {
  return (
    <div className="app">
      {/* <Header /> */}
        <Switch>
          <Route exact  path='/id/:id' component={cartItemDetail} />
          <Route exact path='/' component={Header } />
        </Switch>

    </div>
  );
}

export default App;
