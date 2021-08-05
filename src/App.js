
import './App.css';
import HeaderPage from './Components/Header';
import ListePage from './Components/Liste';

import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>

<HeaderPage/>
<Route path="/Liste" component={ListePage} />

</Router>


  );
}

export default App;
