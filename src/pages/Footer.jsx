import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 font-[Robot_Invaders]">QUICK LINKS</h2>
          <ul className="space-y-2 flex justify-start items-center gap-8">
            <div>
                <li><a href="#" className="hover:text-gray-300 underline">Home</a></li>
                <li><a href="#" className="hover:text-gray-300 underline">Events</a></li>
                <li><a href="#" className="hover:text-gray-300 underline">Workshops</a></li>
                <li><a href="#" className="hover:text-gray-300 underline">Exhibitions</a></li>
            </div>
            <div>
                <li><a href="#" className="hover:text-gray-300 underline">Nights</a></li>
                <li><a href="#" className="hover:text-gray-300 underline">Guest Lectures</a></li>
                <li><a href="#" className="hover:text-gray-300 underline">Sponsors</a></li>
                <li><a href="#" className="hover:text-gray-300 underline">Our Team</a></li>
            </div>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4 font-[Robot_Invaders]">SOCIALS</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-right">
          <h2 className="text-xl font-bold mb-4 font-[Robot_Invaders]">BITS PILANI GOA</h2>
          <div className="space-y-2">
            <p>NH 17B, Bypass, Road,</p>
            <p>Zuarinagar, Sancoale, Goa</p>
            <p>403726</p>
            <p>something@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        © Copyright Quark 2024, All Rights Reserved
      </div>
    </footer>
  );
};


