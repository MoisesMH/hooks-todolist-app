import { useState } from "react";

export default function useInputState(initVal) {
    const [state, setState] = useState(initVal)
    
    const changeVal = (e) => setState(e.target.value)
    const resetVal = () => setState("")

    return [state, changeVal, resetVal]
}