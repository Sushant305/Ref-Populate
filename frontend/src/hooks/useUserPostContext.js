import { useContext } from "react";
import { UserPostContext } from "../context/userPostContext";

export const useUserPostContext = () =>{
    const context = useContext(UserPostContext)

    if(!context){
        throw new Error("useUserPostContext must be used inside UserPostContextProvider");
        
    }
    return context
}