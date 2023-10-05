import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="font-medium text-2xl text-black text-center space-y-4 ">
                <h2 className="text-red-700 text-4xl font-bold">Error 404!!!</h2>
                <p>Page is not found!</p>
                 <Link to='/' className="underline"><button className="btn border-2 border-red-700 bg-red-700 text-white  my-4 rounded hover:bg-white hover:text-red-700 hover:border-red-700">Go Back</button></Link>
            </div>
            
        </div>
    );
};

export default Error;