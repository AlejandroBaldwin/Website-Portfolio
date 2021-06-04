import { Switch, Route } from 'react-router-dom'

import './App.scss';

import Homepage from '../../pages/homepage/Homepage.page';


function App() {
  return (
    <div className="App">
      <Switch >
        <Route path='/' exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
