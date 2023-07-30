
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';//completed
import Articles from './Pages/Articales/Articale';//completed
import Universty from './Pages/Universty/Universty';//completed
import Login from './Pages/Login/Login';//completed
import Signup from './Pages/Signup/Signup';//completed
import Contact from './Pages/Contact/Contact';//completed
import News from './Pages/News/News';//completed
import Caps from './Pages/Caps/Caps';
import Advertise from './Pages/Advertice/Advertise';//completed
import Write from './Pages/Write/Write';//completed
import Error from './Pages/Error';//completed
import Footer from './Component/Footer';//logo
import MastHead from './Pages/MastHead/MastHead';//completed
import WriteArt from './Pages/WriteArticles/WriteArt';//completed
import Authors from './Pages/Authors/Authers';//mini edit
import Investing from './Pages/Investing/Investing';//completed
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'//completed
import MyAccount from './Pages/MyAccount/MyAccount';//completed
import CourseDetails from './Pages/CourseDetails/CourseDetails'//completed
import Review from './Pages/Review/Review';
import Apdating from './Pages/Updated/Updated';//completed
// import AppleIcc from './Pages/AppleIcc/AppleIcc'; //completed
// import Charts from './Component/Charts/Charts';
// import Example from './Component/Charts/Charts';
// import BarCharts from './Component/Charts/Charts';
import Test from './Component/TestComponent';//completed

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/news" element={<News />} />
            <Route path="/universty" element={<Universty />} />
            <Route path="/article" element={<Articles />} />
            <Route path="/caps" element={<Caps />} />
            <Route path="/course" element={<CourseDetails />} />
            <Route path="/review" element={<Review />} />
            <Route path="/reviews" element={<Apdating />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
