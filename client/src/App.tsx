import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Publish } from "./pages/Publish"
import { AppBar } from "./components/AppBar"
import { Landing } from "./pages/Landing"
import { MyBlogs } from "./pages/MyBlogs"
import { ProfileUpdate } from "./pages/ProfileUpdate"

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/profile/blogs" element={<MyBlogs />} />
          <Route path="/profile/update" element={<ProfileUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;