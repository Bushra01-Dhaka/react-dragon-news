import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import AdvertiseBanner from "../../components/SideBar/Advertise/AdvertiseBanner";
import Leftside from "../../components/SideBar/Leftside";
import Rightside from "../../components/SideBar/Rightside";
import BreakingNews from "./BreakingNews";
import HomeCards from "./HomeCards/HomeCards";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                <div className="sticky ">
                    <Leftside></Leftside>
                </div>
                <div className="col-span-2 flex-grow overflow-y-auto">
                    <HomeCards></HomeCards>
                </div>
                <div className="sticky ">
                    <Rightside></Rightside>
                    <AdvertiseBanner></AdvertiseBanner>
                </div>

            </div>
        </div>
    );
};

export default Home;