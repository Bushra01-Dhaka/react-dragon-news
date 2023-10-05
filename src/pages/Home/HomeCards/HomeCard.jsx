import { FaRegBookmark, FaStar } from 'react-icons/fa';
import { BsFillShareFill } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import PropTypes from 'prop-types';


const HomeCard = ({ card }) => {
    const { title, author, image_url, details, rating, total_view ,_id} = card;
    const [readMore, setReadmore] = useState(false);
    const handleReadMore = () => {
        setReadmore(!readMore);
    }

    return (
        <div className=' my-8 border-2 border-slate-300 rounded'>
         <Link to={`/news/${_id}`}>

            <div className="p-4 w-full bg-[#F3F3F3] flex justify-between border-slate-300 border-b-2">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-[40px] h-[40px] rounded-[40px]" src={author?.img} alt="" />
                    <div className="">
                        <p>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <FaRegBookmark className='text-black'></FaRegBookmark>
                    <BsFillShareFill className=' text-black'></BsFillShareFill>

                </div>
            </div>

            <div className="p-4">
                <h2 className='text-[20px] text-[#403F3F] font-bold line-clamp-2 my-4'>{title}</h2>
                <img className='my-5' src={image_url} alt="" />

                {
                    readMore ? <div><p className='text-[#706F6F]'>{details}</p>
                        <Link onClick={handleReadMore} className='text-blue-600 font-bold my-2'>Read Less</Link></div> :
                        <div><p className='text-[#706F6F]'>{details.slice(0, 400)}</p>
                            <Link onClick={handleReadMore} className='text-blue-600 font-bold my-2'>Read More</Link></div>
                }

            </div>

            <div className='p-4 bottom-0 flex justify-between items-center bg-gray-100 border-t-2'>
                <div>
                    <p className='text-lg'><Rating initialRating={rating.number}
                        emptySymbol={<AiOutlineStar className='icon text-yellow-400 text-xl'></AiOutlineStar>}
                        fullSymbol={<FaStar className='icon text-yellow-400 text-xl'></FaStar>}
                    /> {rating.number}</p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <AiOutlineEye></AiOutlineEye>
                    <p>{total_view}</p>
                </div>
            </div>

         </Link>

        </div>
    );
};

HomeCard.propTypes = {
    card: PropTypes.object.isRequired
}


export default HomeCard;