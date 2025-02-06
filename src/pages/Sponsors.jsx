import NavBar from "../components/NavBar"
import SponsorCard from "../components/SponsorCard"
import CrowdPad from '../assets/CrowdPad.png'
import BrainWonders from '../assets/BrainWonders.png'
import Crypto from '../assets/Crypto.png'
import Edvoy from '../assets/Edvoy.png'
import Giggr from '../assets/Giggr.png'
import HavenSpire from '../assets/HavenSpire.png'
import HoverRobotix from '../assets/HoverRobotix.png'
import IDP from '../assets/IDP.png'
import Languify from '../assets/Languify.png'
import X from '../assets/X.png'
import Footer from "./Footer"

export default function Sponsors(){
    return (
        <div className="bg-black h-[100%]">
            <NavBar/>
            <h1 className="font-[Robot_Invaders] text-white text-4xl md:text-8xl text-center mt-24">Sponsors</h1>
            <SponsorCard title={'Powered By'} image={CrowdPad}/>
            <SponsorCard title={'Association Partner'} image={Giggr}/>
            <SponsorCard title={'Official Learning Partner'} image={Edvoy}/>
            <SponsorCard title={'Official Foreign Education Partner'} image={IDP}/>
            <SponsorCard title={'Official CryptoExchange Partner'} image={Crypto}/>
            <SponsorCard title={'Powered By Sponsor of Qriosity Quiz'} image={BrainWonders}/>
            <SponsorCard title={'Official Prize Partner of Corporate Panel'} image={HavenSpire}/>
            {/* <SponsorCard title={'Official Knowledge Partner of Corporate Panel'} image={CrowdPad}/> */}
            <SponsorCard title={'Official Courses Partner'} image={Languify}/>
            <SponsorCard title={'Associate Partner of Robotics Panel'} image={HoverRobotix}/>
            <SponsorCard title={'Official Network Partner of Matka'} image={X}/>
            <SponsorCard title={'Powered By Sponsor of Blockchain Panel'} image={X}/>
            <Footer/>
        </div>
    )
}