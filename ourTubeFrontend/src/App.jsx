import './App.css'
import {
BrowserRouter as Router,
Routes,
Route } from "react-router-dom";
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Video from './components/pages/Video';
import SignIn from './components/pages/SignIn';

function App() {


  return (
    <>
        <div className='Container flex'>
          <Router>
           <Menu/>
          <div className='Main bg-[#eeeeee] dark:bg-[#181818] text-black dark:text-white flex-[7]' >
            <Navbar/>
            <div className='Wrapper px-[96px] py-[22px] '>
           <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              <Route path="signin" element={<SignIn/>} />
              <Route path='video'>
                <Route path=":id" element={<Video/>}/>
              </Route>
            </Route>
           </Routes>
            </div>
          </div>
          </Router>
        </div>
    </>
  )
}

export default App