import { useEffect,useState } from "react";

const Route =({path, children})=>{
    const [currentPath,setCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{
        const onLocatonChange=()=>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener("popstate", onLocatonChange)
    },[]);
    return currentPath === path? children: null;
};

export default Route;