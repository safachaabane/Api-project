
import './App.css';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Details from './components/Details';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" component={UserList} exact />
        <Route  path="/profile/:id" render ={(props) => <Details {...props}/>} />
        </Switch>
      </Router>


    </div>
  );
}
export default App;
