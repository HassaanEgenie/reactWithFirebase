import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
       <form>
      <div className="row">
        <div className="col-sm-12">
           <h1>Register User</h1>
        </div>
        <div className="col-sm-12">
            <div className="form-group">
               <label for="email">Email</label>
               <input className="form-control" type="email"  id="email" placeholder="Email"></input>  
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input className="form-control" type="password" id="password" placeholder="password"></input>
            </div>
            <div className="form-group mt-2">
             <input type="submit" name="Register" className="btn btn-primary"/>
            </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
