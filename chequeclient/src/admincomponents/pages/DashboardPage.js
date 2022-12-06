import React from 'react';

import AdminCardSection1 from './sections/AdminCardSection1';

// import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';



import SideBarNav from '../layout/sideNavigation'
import './admin.css'
import TopNavigation from '../layout/topNavigation';
 


const DashboardPage =  () => {
  return (
    <div className = "flexible-content">
      <TopNavigation/>
   <SideBarNav/>
    < div id = "content"
    className = "p-5" > 
      {/* <BreadcrumSection /> */}
      <AdminCardSection1 />
      <ChartSection1 />
      
     
     
     
      </div>
    
    </div>
  )
}

export default DashboardPage;