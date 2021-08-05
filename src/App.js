
import './App.css';
import HeaderPage from './Components/Header';
import ListePage from './Components/Liste';
import Supprimer from './Components/Supprimer_user';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>

<HeaderPage/>
<Route path="/Liste" component={ListePage} />
<Route path="/Supprimer" component={Supprimer} />
</Router>


  );
}

export default App;
