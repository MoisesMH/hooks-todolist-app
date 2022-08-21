import { useEffect, useState } from "react";

// Create a piece of state using useState and store it under localStorage
export default function useLocalStorageState(key, defaultVal) {
    // make piece of state, based on value in localStorage
    const [state, setState] = useState(() => {
        const obj = { val: null }
        try {
            obj.val = JSON.parse(
                localStorage.getItem(key) || String(defaultVal)
            )
        } catch (e) {
            obj.val = defaultVal
        }
        return obj.val
    })

    // use useEffect hook to update localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    
    // return that piece of state and the function to change that piece of state
    return [state, setState]
}