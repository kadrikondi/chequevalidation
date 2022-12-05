import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupAdmin from './admincomponents/pages/SignupAdmin/SignupAdmin';
import SigninAdmin from './admincomponents/pages/SigninAdmin/SignInPageAdmin'
import BlackRevRegistration from './component/pages/blackrevolution';
import DashboardPage  from "./admincomponents/pages/DashboardPage"
import UsersTable from './admincomponents/pages/UsersTable'
import SingleUser from './admincomponents/pages/SingleUser'
import Certificate from "./component/certificate-generator/index";
import SearchUser from "./admincomponents/pages/SearchUser"
import Congratulation from './component/pages/Congratulation';
import Landingpage from './component/pages/landingpage/Landingpage';
import AboutUs from './component/pages/aboutUs/AboutUs';
import ContactUs from './component/pages/contacUs/ContactUs';
import Volunteer from './component/pages/volunteer/Volunteer'
import Test from './component/cert/Test';
import AimandObj from './component/pages/AimandObj/AimandObj';
import AdminContactUs from './admincomponents/pages/Contactus'
import AllContactList from './admincomponents/pages/Contactlist'
import Download from './component/pages/landingpage/Download';
import Paid from './component/pages/landingpage/Paid';

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            strict
            exact={true}
            component={Landingpage}
          />
          <Route
            path="/join"
            strict
            exact={true}
            component={BlackRevRegistration}
          />
           <Route
            path="/congrats"
            strict
            exact={true}
            component={Congratulation}
          />

          <Route
          path = "/about"
          strict
          exact = {
            true
          }
          component = {
          AboutUs
          }
          />

           <Route
            path="/contactus"
            strict
            exact={true}
            component={ContactUs}
          />
         
 < Route
 path = "/book"
 strict
 exact = {
   true
 }
 component = {
   Download
 }
 />
 < Route
 path = "/paidklkksksksksjjjkui"
 strict
 exact = {
   true
 }
 component = {
   Paid
 }
 />
          <Route
            path="/certificate"
            strict
            exact={true}
            component={Certificate}
          />
          
          <Route path="/test" strict exact={true} component={Test} />

          < Route path = "/volunteer"
          strict exact = {
            true
          }
          component = {
            Volunteer
          }
          />

           <Route path = "/aimandobj"
           strict exact = {true}
           component = {AimandObj}/>





          {/* admin */}
          < Route path = "/adminblackmans"
          strict exact = {
            true
          }
          component = {
          SignupAdmin
          }
          />
          
                    <Route path='/adminsigninlog' component={SigninAdmin}/> 
                     <Route path='/admindashboard' exact= {true} component={DashboardPage} /> 
                      <Route path='/admin/users' component={UsersTable} />
                      <Route path='/admin/view/user/:id' component={SingleUser} />
                         <Route path='/admin/search/user' component={SearchUser} />
                         <Route path = '/admin/contactusdetail/:id'
                         strict exact = {
                           true
                         }
                         component = {
                           AdminContactUs
                         }
                         />
                         
<Route
path = "/admin/contactlist"
strict
exact = {
  true
}
component = {
  AllContactList
}
/>
            {/*
                    <Route path='/admin/profile' component={ProfilePage}/>
                    <Route path='/admin/users' component={UsersTable} />
                     <Route path='/admin/view/user/:id' component={SingleUser} />
                    
                   */}
        </Switch>
      </div>
    );
  }
}

export default Router;
