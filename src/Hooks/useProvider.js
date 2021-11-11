import { useContext } from "react"
import { ContextData } from "../Utilities/ContextProvider/ContextProvider";

const useProvider = () => {
    return useContext(ContextData);
}

export default useProvider;