import React, { useContext, useState } from 'react'
import { ProfileContext } from '../context/ProfileContext'
import "./ProfilePage.css"
import DisplayProfile from './DisplayProfile';
import { Button, Form, InputGroup } from 'react-bootstrap';

function ProfilePage() {
    const profileCtx = useContext(ProfileContext);
    const user = profileCtx.user;
    const [activeProfileId, setActiveProfileId] = useState(null);
    const [search, setSearch] = useState("");
    const [searched,setSearched] = useState(false);



    const searchHandler = (e) => {
        e.preventDefault();
        setSearched(true);
        const profile = user.find(ele => (
            ele.name.toLowerCase().includes(search.toLowerCase())
        ));
            if(profile){
                setActiveProfileId(profile.id);
            }else{
                setActiveProfileId(null);
            }
       

    }
    const activeProfile = user.find(ele => ele.id === activeProfileId);

    return (
        <div className='profile-div'>
            <div className='search-div'>
                <Form onSubmit={searchHandler} className='search-form'>



                    <InputGroup className="mb-3">
                        <Form.Control
                            style={{width:"450px"}}
                            placeholder="Search Cricketer..."
                            aria-label="Search Cricketer..."
                            aria-describedby="basic-addon2"
                            value={search} onChange={(e) => { 
                                const value = e.target.value;
                                setSearch(value); 
                                if(value.trim()===""){
                                    setSearched(false);
                                }
                            }}
                        />
                        <Button type="submit" variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>



                </Form>
            </div>
            <div>
                { activeProfile &&  <DisplayProfile activeProfile={activeProfile} /> }
                {searched && !activeProfile &&  
                <div className='text-center'><strong>No Profile Found</strong></div>}
            </div>

        </div>

    )
}

export default ProfilePage
