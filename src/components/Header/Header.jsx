import moment from 'moment';
import logo from '../../assets/logo.png'


const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img className="mx-auto my-5" src={logo} alt="" />
                <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <h3 className='text-[#403F3F] text-xl my-2 font-medium'>{moment().format("dddd, MMMM D, YYYY")}</h3>
            </div>

        </div>
    );
};

export default Header;