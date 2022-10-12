// import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Pratice from './memes/meme'

import Home from './Home'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
// import Crud from "./crud"
// import Ndex from './Ndex';
//blog
import BlogAbout from "./components/Blogabout"
import BlogPost from "./components/Blogpost"
import BlogProjects from "./components/BlogProjects"
import BlogSinglePost from "./components/BlogsinglePost"
import Contact from './components/contact';
import MailChimp from './components/Mail/mailchimp';
// popular post
import PopularCurrent from './components/PopularCurrent';
import Popular from './components/popular';
import ReactGA from "react-ga"; //tracking website

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TRACKING_ID = "G-V1N0LP5RCY"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
      <Router>
        <Navbar/>
    <Routes>
        <Route exact path='/'  element={<Home />} />
         {/* <Route exact path='/Crud'  element={<Crud />} />
            <Route exact path='/Ndex'  element={<Ndex />} /> */}
            {/* /Blog/ */}
            
            <Route exact path='/home'  element={<Home />} />
            <Route exact path='/about'  element={<BlogAbout />} />
            <Route exact path='/post/:slug'  element={<BlogSinglePost />} />
            <Route exact path='/post'  element={<BlogPost />} />
            <Route exact path='/projects'  element={<BlogProjects />} />
            <Route exact path='/Contact'  element={<Contact />} />
            <Route exact path='/mailChimp'  element={<MailChimp />} />
        <Route exact path='/posts/:id'  element={<PopularCurrent />} />
        <Route exact path='/posts'  element={<Popular />} />


    </Routes>
<Footer/>
    </Router>

  );
}

export default App;
