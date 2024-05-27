import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import './App.css';
import ContactUsPage from "./ContactUsPage";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import InformationPage from "./InformationPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import ProfilePage from "./ProfilePage";
import SubscriptionPage from "./SubscriptionPage";
import TermsOfUsePage from "./TermsOfUsePage";
import Users from "./Users";
import Login from "./components/Registration/login";
import FakeShutdownScreen from './fakeshutdown';
import UDashboard from "./uDashboard";

function App() {
  return (
    <div>
      {/* <Media/> */}
{/* <Privatephotos/> */}
      {/* <ProfilePage/> */}
      {/* <SuccessStoriesForm/>
      <ContactUsPage/>} */}
      {/* <Users/> */}
      {/* {<Dashboard />} */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contactus" element={<ContactUsPage/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsOfUse" element={<TermsOfUsePage />} />
        {/* <Route path="/contactUs" element={<ContactUsPage />} /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/information/:id/:uid" element={<InformationPage/>} />
        <Route path="/udashboard" element={<UDashboard/>} />
        <Route path="/dashboard/:uid/profile/:id" element={<ProfilePage/>} />
        <Route path="/fakeshutdown" element={<FakeShutdownScreen />} />
       
    </Routes>
    </div>
  );
}

export default App;
