import { useEffect, useState } from "react";

const useInternetStatus = () => {
    const [onlinestatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });
    },[])
    return onlinestatus;
}

export default useInternetStatus;