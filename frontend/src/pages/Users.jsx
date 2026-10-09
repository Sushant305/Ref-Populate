import React, { useEffect } from "react";
import UserForm from "../components/UserForm";
import { useUserPostContext } from "../hooks/useUserPostContext";

const Users = () => {
  const {dispatch} = useUserPostContext();

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`)
        const json = await response.json()

        if(!response.ok){
          throw new Error(json.error||"failed to fetch users");
        }
        dispatch({
          type:"SET_USERS",
          payload:json
        })
      } catch (error) {
        console.log("Error fetching users:",error.message);
        
      }
    }
    fetchusers()
  }, [dispatch])
  

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="text-3xl font-bold text-slate-800 ">Create User</h1>
      <UserForm />
    </div>
  );
};

export default Users;
