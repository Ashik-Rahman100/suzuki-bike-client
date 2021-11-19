import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import AddNewPlace from "./components/Dashboard/AddNewPlace/AddNewPlace";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/Dashboard/MakeAdmin/MakeAdmin";
import MyOrder from "./components/Dashboard/MyOrder/MyOrder";
import Payment from "./components/Dashboard/Payment/Payment";
import Expertise from './components/Expertise/Expertise';
import Footer from "./components/Footer/Footer";
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
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
          <Route path ='/dashbord'>
            <Dashboard></Dashboard>
          </Route>
          <Route path = '/addPlace'>
            <AddNewPlace></AddNewPlace>
          </Route>
          <Route path ='/addReview'>
            <AddReview></AddReview>
          </Route>
          <Route path ='/myorder'>
            <MyOrder></MyOrder>
          </Route>
          <Route path ='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path ='/payment'>
            <Payment></Payment>
          </Route>
          <Route path ='/login'>
             <Login></Login>
          </Route>
          <Route path ='/register'>
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

