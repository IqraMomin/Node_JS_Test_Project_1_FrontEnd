import { useContext, useEffect } from 'react'
import './App.css'
import ProfileForm from './components/ProfileForm'
import { ProfileContext } from './context/ProfileContext'
import ProfilePage from './components/ProfilePage';

function App() {
  const profileCtx = useContext(ProfileContext);

  useEffect(()=>{
    profileCtx.getAllUsers();
  },[])

  return (
    <>
     <ProfileForm/>
     <ProfilePage/>
    </>
  )
}

export default App
