import { useReducer, useEffect } from "react";

export default function useLocalStorageReducer(key, reducer, defaultVal) {
    const [todos, dispatch] = useReducer(reducer, defaultVal, () => {
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
        localStorage.setItem(key, JSON.stringify(todos))
    }, [todos])

    return [
        todos,
        dispatch
    ]
}