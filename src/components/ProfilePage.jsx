import React, { useContext, useState } from 'react'
import { ProfileContext } from '../context/ProfileContext'
import "./ProfilePage.css"

function ProfilePage() {
    const profileCtx = useContext(ProfileContext);
    const user= profileCtx.user;
    const [activeProfile,setActiveProfile] = useState(null);
    const [search,setSearch] = useState("");

    const editUserHandler = (user)=>{
        profileCtx.isEditHandler(user);
    }

    const deleteUserHandler = (id)=>{
        profileCtx.deleteUserHandler(id);
    }

    const searchHandler = (e)=>{
        e.preventDefault();
        const profile = user.find(ele=>(
            ele.name.toLowerCase().includes(search.toLowerCase())
        ));
        setActiveProfile(profile);
    }

    return (
        <div>
            <div>
            <form onSubmit={searchHandler}>
                <div>
                    <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button type='submit'>Search</button>
                </div>
            </form>
            </div>
            <div>
           {activeProfile && <div className='profile-div'>
            <div>
                <img width="250px" height="250px" src={activeProfile.url}/>
                <p>DOB: {activeProfile.dob}</p>
                <p>Birthplace: {activeProfile.birthplace}</p>
                <p>Score: {activeProfile.score}</p>               
                <p>Number of Wickets: {activeProfile.wickets}</p>
                <p>Fifties: {activeProfile.fifties}</p>
                <p>Centuries: {activeProfile.centuries}</p>
                <p>Average: {activeProfile.average}</p>                               
                </div>
                <div>
                <p>Career: {activeProfile.career}</p>
                </div>

            </div> } 
            </div>
        </div>
        
    )
}

export default ProfilePage
