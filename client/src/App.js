import Navbar from "./Navbar"
import './App.css'
import PostList from "./PostList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState, useEffect } from 'react'
import PostUpload from "./PostUpload"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search";


function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers]= useState([])
  const [search, setSearch]= useState('')

    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data=> data.username && setCurrentUser(data) );
    },[])

  if (!currentUser) {
    return (
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='/SignUp' element={<SignUp  />} />
      </Routes>


    )
  } else{
  return (

      <div className="App">
        <header className="App-header">
          InstaChat
          <Navbar setCurrentUser={setCurrentUser}/>

          <Routes>
            <Route path="/home" element={<PostList />}/>
            <Route path='/upload' element={<PostUpload />}/>
            <Route path='/search' element={<Search users={filteredUsers} search={search} setSearch={setSearch} />}/>
            

          {/* <SignUp />
          <SignIn  /> */}
          </Routes>
        </header>
      </div>

  );
}
}

export default App;
