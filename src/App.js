
import './App.css';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Info from './Components/Info';


function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
    
      <Switch>
      <Route exact path="/" component={UserList}/>
      <Route exact path="/info/:id" render={(props)=> <Info {...props}/>}/>
      
      </Switch>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
