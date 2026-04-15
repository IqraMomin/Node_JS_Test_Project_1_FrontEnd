import { createContext, useState } from "react";
import axios from "axios";

export const ProfileContext = createContext();

export const ProfileProvider = ({children})=>{
    const [user,setUser] = useState([]);
    const [isEdit,setIsEdit] = useState(null);

    const isEditHandler = (user)=>{
        setIsEdit(user);
    }
    const addUser = async(user)=>{
        try{
            const res = await axios.post(`http://localhost:3000/users/addUser`,user);
            console.log(res.data);
            setUser(prev=>[...prev,user]);
        }
        catch(err){
            console.log(err);
        }
        
    }

    const deleteUser =async (id)=>{
        try{
            const res = await axios.delete(`http://localhost:3000/users/deleteUser/${id}`);
            console.log(res.data);
            setUser(prev=>prev.filter(ele=>ele.id!==id));
        }
        catch(err){
            console.log(err);
        }
    }

    const getAllUsers = async()=>{
        try{
            const res = await axios.get(`http://localhost:3000/users/`);
            console.log(res.data);
            setUser(res.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const updateUser = async(id,user)=>{
        try{
            const res = await axios.put(`http://localhost:3000/users/updateUser/${id}`,user);
            console.log(res.data);
            setUser(prev=>prev.map(ele=>ele.id===id ? {...res.data}:ele));
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <ProfileContext.Provider value={
            {user,isEditHandler,isEdit,addUser,deleteUser,updateUser,getAllUsers}
        }>
            {children}
        </ProfileContext.Provider>
    )
}