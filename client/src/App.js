import Navbar from "./Navbar"
import './App.css'
import PostList from "./PostList";
import SignUp from "./SignUp";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        InstaChat
        <Navbar />
        <PostList />
        <SignUp />
      </header>
    </div>
  );
}

export default App;
