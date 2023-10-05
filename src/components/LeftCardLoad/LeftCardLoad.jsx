import pic1 from '../../assets/1.png';
import pic2 from '../../assets/2.png';
import pic3 from '../../assets/3.png';
import { FaCalendar } from 'react-icons/fa';

const LeftCardLoad = () => {
    return (
        <div className='mt-8'>
            <div className="card card-compact  bg-base-100 shadow-xl rounded mb-4">
                <figure><img src={pic1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="card-title text-[20px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                 <div className='flex justify-center items-center gap-2'>
                      <p className='text-gray-600'>Sports</p>
                      <div className='flex items-center gap-2 mt-4'>
                        <FaCalendar></FaCalendar> Jan 4, 2023
                      </div>
                 </div>
                </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl rounded mb-4">
                <figure><img src={pic2} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="card-title text-[20px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                 <div className='flex justify-center items-center gap-2'>
                      <p className='text-gray-600'>Sports</p>
                      <div className='flex items-center gap-2 mt-4'>
                        <FaCalendar></FaCalendar> Jan 4, 2023
                      </div>
                 </div>
                </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl rounded mb-4">
                <figure><img src={pic3} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="card-title text-[20px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                 <div className='flex justify-center items-center gap-2'>
                      <p className='text-gray-600'>Sports</p>
                      <div className='flex items-center gap-2 mt-4'>
                        <FaCalendar></FaCalendar> Jan 4, 2023
                      </div>
                 </div>
                </div>
            </div>


        </div>
    );
};

export default LeftCardLoad;