import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Contact_Us from './pages/Contact_Us';
import AboutUsPage from './pages/AboutUsPage';
import OurTeamPage from './pages/OurTeamPage';
import CustomerDashboard from './pages/CustomerDB/CusDashboard';
import CusProfile from './pages/CustomerDB/CusProfile';
import CusSettings from './pages/CustomerDB/CusSettings';
import ListYourBusiness from './pages/ListYourBusiness';
import User_SignIn_Login from './pages/SignIn_Login/User_Signin_Login/User_SignIn_Login';
import SPSigninLogin from './pages/SignIn_Login/SP_Signin_Login/SP_Signin_Login';
import AdminDetailsForm from './pages/AdminDetailsForm';
import Logout from './components/Dashboard/Logout';
import ServiceSearchForm from './components/Services/ServiceSearchForm/ServiceSearchForm';
import DisplayServiceProvider from './components/Services/DisplayServiceProvider/DisplayServiceProvider';
import ServicesFinalPage from './components/Services/ServicesFinalPage/servicesFinalPage';
import SPDashboard from './pages/ServiceProviderDB/SPDashboard';
import SPProfile from './pages/ServiceProviderDB/SPProfile';
import SPSettings from './pages/ServiceProviderDB/SPSettings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
        <Route path="/contactus" component={Contact_Us} exact/>
        <Route path="/aboutUsPage" component={AboutUsPage} exact/>
        <Route path="/ourTeamPage" component={OurTeamPage} exact/>
        <Route path="/users" component={CustomerDashboard} exact/>
        <Route path="/user/dashboard" component={CustomerDashboard} exact/>
        <Route path="/user/profile" component={CusProfile} exact/>
        <Route path="/user/settings" component={CusSettings} exact/>
        <Route path="/signup_admin" component={ListYourBusiness} exact/>
        <Route path="/signin_user" component={User_SignIn_Login} exact/>
        <Route path="/signin_admin" component={SPSigninLogin} exact/>
        <Route path="/admin_details" component={AdminDetailsForm} exact/>
        <Route path="/logout" component={Logout} exact/>
        <Route path="/servicedetails" component={ServiceSearchForm} exact/>
        <Route path="/services" component={DisplayServiceProvider} exact/>
        <Route path="/services/select" component={ServicesFinalPage} exact/>
        <Route path="/admin" component={SPDashboard} exact/>
        <Route path="/admin/dashboard" component={SPDashboard} exact/>
        <Route path="/admin/profile" component={SPProfile} exact/>
        <Route path="/admin/settings" component={SPSettings} exact/>
      </Switch>
    </Router>
  );
}

export default App;
