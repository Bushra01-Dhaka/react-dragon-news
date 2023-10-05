import { useContext } from "react";
import { AuthContext } from "../../UserProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const {loading} = useContext(AuthContext);
    //let's know where is the location
    const location = useLocation();
    console.log(location);
    if(loading)
    {
        return <div className="flex justify-center items-center h-[90vh]"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user)
    {
       return children;
    }
    //let's set the state 
    return <Navigate state={location.pathname}  to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;