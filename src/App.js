import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Expertise from './components/Expertise/Expertise';
import Footer from "./components/Footer/Footer";
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AddNewPlace from "./components/PlaceBooking/AddNewPlace/AddNewPlace";
import Booking from "./components/PlaceBooking/Booking/Booking";
import Resister from "./components/Resister/Resister";
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path ='/about'>
            <About></About>
          </Route>
          <Route path ='/gallery'>
            <Gallery></Gallery>
          </Route>
          <Route path ='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/service/:id'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path='/trainers'>
            <Expertise></Expertise>
          </Route>
          <Route path ='/blog'>
            <Blog></Blog>
          </Route>
          <Route path ='/booking'>
            <Booking></Booking>
          </Route>
          <Route path = '/addPlace'>
            <AddNewPlace></AddNewPlace>
          </Route>
          <Route path ='/login'>
             <Login></Login>
          </Route>
          <Route>
            <Resister></Resister>
          </Route>
          <Route path ='*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

