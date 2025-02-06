import Quark_Logo from '../assets/Quark_25_Logo-removebg-preview 1.svg'
import { useNavigate } from 'react-router-dom'

export default function NavBar(){

    const navigate = useNavigate();

    return (
        <div className="bg-black w-[100%] text-white font-[Robot_Invaders] flex justify-center items-center">
            <div className='flex justify-around items-center w-[40%]'>
                <button>Events</button>
                <button>Workshops</button>
                <button>Exhibitions</button>
                <button>Nights</button>
            </div>
            <div className='w-[20%] mx-auto'>
                <button onClick={()=>{navigate('/')}} className='hover:cursor-pointer'>
                <img src={Quark_Logo} alt="" width={300}/>
                </button>
            </div>
            <div className='flex justify-around items-center w-[40%]'>
                <button>Guest Lectures</button>
                <button>Sponsors</button>
                <button>Our Team</button>
            </div>
        </div>
    )
}