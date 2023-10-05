import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftCardLoad from "../LeftCardLoad/LeftCardLoad";


const Leftside = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    }, [])
    return (
        <div className="p-2">
            <h2 className="font-bold text-[#403F3F] text-[20px]">All Caterogy</h2>
            <button className=" btn my-4 w-full h-[40px] rounded p-2 bg-gray-200 ">National News</button>
            <div className="space-y-6">
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="block ml-4 text-xl text-[#9F9F9F] font-semibold" key={category.id}>{category.name}</Link>)
                }
            </div>

            <div>
               <LeftCardLoad></LeftCardLoad>
            </div>
        </div>
    );
};

export default Leftside;