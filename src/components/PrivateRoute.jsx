import { Navigate } from "react-router-dom";
const PrivateRoute = ({ loggedIn, children }) => {
    if (loggedIn) {
        return children;
    }else{
       return <Navigate to ="/login"/>
    }
};

export default PrivateRoute
