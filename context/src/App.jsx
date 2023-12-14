import './App.css'
import Login from './comps/Login'
import Profile from './comps/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
  
  return (

    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
