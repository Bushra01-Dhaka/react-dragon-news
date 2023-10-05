import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import  { AuthContext } from "../../UserProvider/AuthProvider";
import swal from "sweetalert";
import './LoginSweetalert.css'

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate(); // by default onno page visit korar jonno

    const location = useLocation();
    console.log("Log in location:", location);

    const [errorLogin, setErrorLogin] = useState('');
    const [success, setSuccess] = useState('');   

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            setSuccess('Logged In Successfully!');
            //***********signIn howar por onno page e jabe*********
            // e.target.reset();
            navigate(location?.state? location.state : '/')

        //***********alert************
            swal("Logged In Successfully!", {
                button: "Ok",

              });
        })
        .catch(error => {
            console.error(error);
            setErrorLogin('Please provide valid Email & Password');
            // swal("Please provide valid Email & Password", {
            //     button: "Ok",

            //   });
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mt-10 mb-4 text-[#403F3F] font-bold">Please Login</h2>
            <div className="mx-auto">
                <div className="hero">
                    <div className="hero-content flex-col md:w-2/3 lg:w-1/2">

                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleLogIn} className="card-body w-full ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#403F3F] font-bold">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#403F3F] font-bold">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary bg-[#403F3F] text-white hover:bg-black">Login</button>
                                    </div>
                              {
                                success && <p className="text-center text-md text-green-700 font-semibold my-2">{success}</p>
                              }
                              {
                                errorLogin && <p className="text-center my-2 text-md font-semibold text-red-700">{errorLogin}</p>
                              }

                                <p className="text-center mt-4">Do not have account? Please <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;