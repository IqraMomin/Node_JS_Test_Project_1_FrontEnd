import React from 'react'
import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import "./DisplayProfile.css";
import { Button, Stack } from 'react-bootstrap';

function DisplayProfile({ activeProfile }) {

    const profileCtx = useContext(ProfileContext);


    const editUserHandler = (user) => {
        profileCtx.isEditHandler(user);
    }

    const deleteUserHandler = (id) => {
        profileCtx.deleteUser(id);
    }
    return (
        <div className='display-div'>
            <div className='img-div'>

                <Stack gap={3}>
                    <img width="200px" height="200px" className='mb-5' style={{ borderRadius: "50%" }} src={activeProfile.url} />
                    <div className='p-2'><strong>Name : </strong>{activeProfile.name}</div>
                    <div className='p-2'><strong>Date Of Birth :</strong> {activeProfile.dob}</div>
                    <div className='p-2'><strong>Birthplace: </strong>{activeProfile.birthplace}</div>
                    <div className='p-2'><strong>Score: </strong>{activeProfile.score}</div>
                    <div className='p-2'><strong>Number of Wickets: </strong>{activeProfile.wickets}</div>
                    <div className='p-2'><strong>Fifties: </strong>{activeProfile.fifties}</div>
                    <div className='p-2'><strong>Centuries:</strong> {activeProfile.centuries}</div>
                    <div className='p-2'><strong>Average: </strong>{activeProfile.average}</div>
                </Stack>

            </div>
            <div className='career-div'>
                <Stack direction="horizontal" gap={3}>
                    <div className="p-2">
                       <h2><strong>Career</strong></h2>
                    </div>
                    <div className="p-1 ms-auto">
                        <Button variant='warning' onClick={() => { editUserHandler(activeProfile) }}>Edit Profile</Button>

                    </div>
                    <div className="p-1">
                        <Button variant='danger' onClick={() => { deleteUserHandler(activeProfile.id) }}>Delete Profile</Button>
                    </div>
                </Stack>
                <div>
                   <p className='p-3 mt-4 text-center fs-6' style={{whiteSpace:"pre-line"}}>
                   {activeProfile.career}
                   </p> 
                </div>


            </div>

        </div>
    )
}

export default DisplayProfile
