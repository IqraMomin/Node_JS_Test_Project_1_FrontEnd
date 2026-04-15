import { useContext, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileForm from './components/ProfileForm'
import { ProfileContext } from './context/ProfileContext'
import ProfilePage from './components/ProfilePage';

function App() {
  const profileCtx = useContext(ProfileContext);

  useEffect(()=>{
    profileCtx.getAllUsers();
  },[])

  return (
    <div className='container-fluid mb-5'>
    
     <ProfileForm/>
     <ProfilePage/>
    </div>
  )
}

export default App
