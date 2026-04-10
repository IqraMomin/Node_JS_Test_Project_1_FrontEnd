import React, { useContext, useState } from 'react'
import { ProfileContext } from '../context/ProfileContext'

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
        const profile = user.find(ele=>ele.name.includes(search));
        if(profile){
            setActiveProfile(profile);
        }
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
           {activeProfile && <p>{activeProfile.name}</p> } 
            </div>
        </div>
        
    )
}

export default ProfilePage
