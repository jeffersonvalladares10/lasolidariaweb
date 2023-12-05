import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/main/Home"
import Campaigns from "./pages/main/Campaigns"
import Organizations from "./pages/main/Organizations"
import About from "./pages/main/About"
import LoginPage from "./pages/accounts/LoginPage"
import SignupPage from "./pages/accounts/SignupPage"
import UserDashboard from "./pages/dashboards/UserDashboard"
import OrgDashboard from "./pages/dashboards/OrgDashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns/>} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/org/dashboard/" element={<OrgDashboard />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
