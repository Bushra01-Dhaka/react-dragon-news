import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn w-[140px] h-[40px] bg-red-700 text-white p-2 rounded hover:bg-red-600">Breaking News</button>
            <Marquee className="text-black bg-gray-100" pauseOnHover= {true} speed={100}>
                 <p className="mr-8 text-black">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</p>
                 <p className="mr-8 text-black">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</p>
                 <p className="mr-8 text-black">Tucker Carlson: Putin Winning in Ukraine, Biden Hurting West</p>
                 <p className="mr-8 text-black">Halo, GTA Vice City Actor Directing Movie About Hunter Biden</p>
                 <p className="mr-8 text-black">Self-obsessed liar’: Meghan mocked for Mandela story</p>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;