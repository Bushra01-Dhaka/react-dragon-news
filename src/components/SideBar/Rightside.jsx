import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import zone1 from "../../assets/qZone1.png";
import zone2 from "../../assets/qZone2.png";
import zone3 from "../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../UserProvider/AuthProvider";

const Rightside = () => {
  const {signInGoogle, signInGithub} = useContext(AuthContext);
  const hangleGoogleSignIn = () =>
  {
      signInGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleGithubLogIn = () => 
  {
    signInGithub()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.error(error);
    })
  }


    return (
        <div>
            <div className=" p-4">
                <h2 className="font-bold text-[#403F3F] text-[20px]">Login With</h2>
                <button onClick={hangleGoogleSignIn} className="my-4 btn w-full border-blue-600 text-blue-600 font-bold hover:border-2 hover:border-blue-600">
                <AiFillGoogleCircle className="text-xl"></AiFillGoogleCircle>  Google
                </button>
                <button onClick={handleGithubLogIn} className="btn w-full border-black text-black font-bold hover:border-2 hover:border-black">
                  <BsGithub></BsGithub> Github
                </button>
            </div>

            <div className=" p-4">
                <h2 className="mb-4 font-bold text-[#403F3F] text-[20px]">Find Us On</h2>
               <a href="" className="flex p-4 items-center text-lg gap-2 border border-[#E7E7E7] rounded-t-lg">
                 <FaFacebook className="text-blue-700 font-bold"></FaFacebook> Facebook
               </a>
               <a href="" className="flex p-4 items-center text-lg gap-2 border-x border-[#E7E7E7] rounded ">
                 <FaTwitter className="text-blue-500 font-bold"></FaTwitter> Twitter
               </a>
               <a href="" className="flex p-4 items-center text-lg gap-2 border border-[#E7E7E7] rounded-b-lg">
                <FaInstagram className="text-rose-600 font-bold"></FaInstagram> Instagram
               </a>
            </div>

            
            <div className=" p-4 bg-gray-300">
                <h2 className="mb-4 font-bold text-[#403F3F] text-[20px]">Q-Zone</h2>
               <img src={zone1} alt="" />
               <img src={zone2} alt="" />
               <img src={zone3} alt="" />
            </div>
        </div>
    );
};

export default Rightside;