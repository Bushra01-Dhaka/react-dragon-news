import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto px-4 md:px-2 lg:px-0"> 
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;