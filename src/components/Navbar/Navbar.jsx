import { Link, NavLink } from "react-router-dom";
import userpic from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../UserProvider/AuthProvider";


const Navbar = () => {

    const {user, logOutUser} = useContext(AuthContext);

    const handleSignInOut = () => 
    {
        logOutUser()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }



    return (
        <div className="mt-[30px]">
            <div className=" navbar container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="navbar-start">

                </div>
              <div className="navbar-center">
              <ul className=" flex justify-center items-center gap-4">
                    <li><NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-red-700" : ""
                        }>Home</NavLink></li>
                    <li><NavLink to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }>About</NavLink></li>
                    <li><NavLink to="/career"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }>Career</NavLink></li>
                </ul>
              </div>

                <div className="navbar-end">

                  {
                    user ?  <div className="my-4 md:my-0 flex justify-center items-center gap-4">
                        <p>{user.email}</p>
                    <img className="w-[40px] h-[40px] rounded-[40px]" src={userpic} alt="" />
                   <Link to='/login'> <button onClick={handleSignInOut} className="btn text-white rounded w-[140px] h-[40px] bg-[#403F3F] hover:bg-red-700">Sign Out</button></Link>
                   </div> :

                    <div className="my-4 md:my-0 flex justify-center items-center gap-4">
                    <img className="w-[40px] h-[40px] rounded-[40px]" src={userpic} alt="" />
                   <Link to='/login'> <button className="btn text-white rounded w-[140px] h-[40px] bg-[#403F3F] hover:bg-red-700">Login</button></Link>
                   </div>
                  }



                {/* //    <div className="my-4 md:my-0 flex justify-center items-center gap-4">
                //     <img className="w-[40px] h-[40px] rounded-[40px]" src={userpic} alt="" />
                //    <Link to='/login'> <button onClick={handleSignInOut} className="btn text-white rounded w-[140px] h-[40px] bg-[#403F3F] hover:bg-red-700">Login</button></Link>
                //    </div> */}
                  
                </div>

            </div>
        </div>
    );
};

export default Navbar;