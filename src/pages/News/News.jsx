import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Rightside from "../../components/SideBar/Rightside";
import Navbar from "../../components/Navbar/Navbar";


const News = () => {
    const {id} = useParams();
    console.log("newsId: ", id)
   
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3 border-2">
                     <h2>News details</h2>
                     <p>{id}</p>
                     
                </div>
                <div>
                    <Rightside></Rightside>
                </div>

            </div>
        </div>
    );
};

export default News;