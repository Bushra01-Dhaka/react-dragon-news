import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";


const HomeCards = () => {
    const [cards, setcards] = useState([]);

    useEffect(() => {
         fetch('news.json')
         .then(res => res.json())
         .then(data => setcards(data));
    }, [])
    return (
        <div>
            <h2  className="font-bold text-[#403F3F] text-[20px]">Dragon News Home</h2>
            <div>
                {
                    cards.map(card => <HomeCard card={card} key={card.id}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default HomeCards;