import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Auth = createContext();

const Authprovide = ({ children }) => {

    const [apidata, setapidata] = useState([]);
    const[flag,setflag]=useState(false);
    const getdata = () => {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
            .then((res) => setapidata(res.data))
    }

    useEffect(() => {
        getdata()
    }, [])

    return <Auth.Provider value={{setflag,apidata,setapidata}} >{children}</Auth.Provider>

}

export default Authprovide;