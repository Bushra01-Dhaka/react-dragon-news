import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../UserProvider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mt-10 mb-4 text-[#403F3F] font-bold">Please Register</h2>
            <div className="mx-auto">
                <div className="hero">
                    <div className="hero-content flex-col md:w-2/3 lg:w-1/2">

                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body w-full ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[#403F3F] font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[#403F3F] font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Your Photo URL" className="input input-bordered" />
                                </div>
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
                                    <button className="btn btn-primary bg-[#403F3F] text-white hover:bg-black">Register</button>
                                </div>


                                <p className="text-center mt-4">Already have an account? Please <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;