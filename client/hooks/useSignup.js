import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json();

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }

        if(response.ok){
            //save user to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})

            setLoading(false)

        }
    }
    return {signup, loading, error}



}
