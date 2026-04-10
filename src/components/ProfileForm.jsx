import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../context/ProfileContext';

const initialState = {
    name:'',dob:'',url:'',birthplace:'',career:'',matches:'',score:'',fifties:'',centuries:'',wickets:'',average:''
}

function ProfileForm() {
    const [formData,setFormData] = useState(initialState);
    const profileCtx = useContext(ProfileContext);
    const isEdit = profileCtx.isEdit;

    useEffect(()=>{
        if(isEdit){
            setFormData({
                name:isEdit.name||"",dob:isEdit.dob||"",url:isEdit.url||'',birthplace:isEdit.birthplace||'',
                career:isEdit.career||'',matches:isEdit.matches||'',score:isEdit.score||'',fifties:isEdit.fifties||'',
                centuries:isEdit.centuries||'',wickets:isEdit.wickets||'',average:isEdit.average||''
            })
        }else{
            resetForm();
        }
    })

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }
    const fields = [
       {name:'name',type:'text',label:'Name : '},
       {name:'dob',type:'text',label:'DOB : '},
       {name:'url',type:'text',label:'Photo URL : '},
       {name:'birthplace',type:'text',label:'Birth Place : '},
       {name:'career',type:'text',label:'Career : '},
       {name:'matches',type:'number',label:'Number of Matches : '},
       {name:'score',type:'number',label:'Score : '},
       {name:'fifties',type:'number',label:'Fifties : '},
       {name:'centuries',type:'number',label:'Centuries : '},
       {name:'wickets',type:'number',label:'Wickets : '},
       {name:'average',type:'number',label:'Average : '},
    
    ]

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        if(isEdit){
            profileCtx.updateUser(isEdit.id,formData);
            profileCtx.isEditHandler(null);
        }else{
            profileCtx.addUser(formData);
        }
        resetForm();
    }

    const resetForm = ()=>{
        setFormData(initialState);
    }

    return (
        <div>
           <form onSubmit={formSubmitHandler}>
                {fields.map(field=>(
                    <div key={field.name}>
                        <label>{field.label}
                        <input 
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}/>
                        </label>
                    </div>
                )
                )}
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form> 
        </div>
    )
}

export default ProfileForm
