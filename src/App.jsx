import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './website/components/Header'
import Footer from './website/components/Footer'
import About from './website/pages/About'
import Contact from './website/pages/Contact'
import Login from './website/pages/Login'
import Signup from './website/pages/Signup'
import Blog from './website/pages/Blog'
import Artist from './website/pages/Artist'
import SingleArtist from './website/pages/SingleArtist'
import Profile from './website/pages/Profile'
import UpdateProfile from './website/pages/UpdateProfile'
import AHeader from './admin/components/AHeader'
import AFooter from './admin/components/AFooter'
import Dashboard from './admin/pages/Dashboard'
import ArtistManage from './admin/pages/ArtistManage'
import ManageBlog from './admin/pages/ManageBlog'
import ManageContact from './admin/pages/ManageContact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleBlog from './website/pages/SingleBlog'
import AddBlog from './admin/pages/AddBlog'
import UpdateBlog from './admin/pages/UpdateBlog'

function App() {
  return (

    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* WEBSITE ROUTE */}
          <Route path='/' element={<> <Header /> <Home /> <Footer /> </>} />
          <Route path='/artist' element={<> <Header /> < Artist /> <Footer /> </>} />
          <Route path='/artist/:id' element={<> <Header /> <SingleArtist /> <Footer /> </>} />
          <Route path='/about' element={<> <Header /> <About /> <Footer /> </>} />
          <Route path='/contact' element={<> <Header /> <Contact /> <Footer /> </>} />
          <Route path='/login' element={<> <Header /> <Login /> <Footer /> </>} />
          <Route path='/signup' element={<> <Header /> <Signup /> <Footer /> </>} />
          <Route path='/blog' element={<> <Header /> <Blog /> <Footer /> </>} />
          <Route path='/blog/:bid' element={<> <Header /> <SingleBlog /> <Footer /> </>} />
          <Route path='/profile' element={<> <Header /> <Profile /> <Footer /> </>} />
          <Route path='/profile/update/:uid' element={<> <Header /> <UpdateProfile /> <Footer /> </>} />

          {/* ADMIN ROUTE */}
          <Route path='/admin/dashboard' element={<> <AHeader /> <Dashboard /> <AFooter /> </>} />
          <Route path='/admin/manage-artist' element={<> <AHeader /> <ArtistManage /> <AFooter /> </>} />
          <Route path='/admin/manage-blog' element={<> <AHeader /> <ManageBlog /> <AFooter /> </>} />
          <Route path='/admin/add-blog' element={<> <AHeader /> <AddBlog /> <AFooter /> </>} />
          <Route path='/admin/update-blog/:bid' element={<> <AHeader /> <UpdateBlog /> <AFooter /> </>} />
          <Route path='/admin/manage-contact' element={<> <AHeader /> <ManageContact /> <AFooter /> </>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App