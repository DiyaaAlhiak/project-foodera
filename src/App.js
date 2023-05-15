import './App.css';
import Home from './components/Home/Home';
import {Fragment} from 'react'
import Navs from './components/Navs/Navs';
function App() {
  return (
    <Fragment>
<Navs/>
<Home/>
    </Fragment>
  ); 
}

export default App;
