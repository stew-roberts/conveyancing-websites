import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [headerColour, setHeaderColour] = useState('transparent')
    const toggle = () => setIsOpen(!isOpen)
    
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setHeaderColour('rgb(20, 28, 52)')
            } else {
                setHeaderColour('transparent')
            }
        }
        window.addEventListener('scroll', changeBackground)
    })
  return (
    <header className="fixed top-0 left-0 w-full ease-in duration-300 z-10 drop-shadow-xl" style={{backgroundColor: `${headerColour}`}}>
        <div className="container mx-auto flex justify-between items-center px-4 top-0 text-white">
            <div className="flex">
                <h1 className="london-europa-heading font-bold text-3xl p-4">
                    <img src="https://www.datocms-assets.com/98233/1680893689-fulllogo_transparent_nobuffer.png" alt="logo" className="w-96" />
                </h1>
            </div>
            <nav className="items-center z-50">
                <ul className="hidden lg:inline-flex justify-center text-sm">
                    <li className="px-3"><Link className="cursor-pointer hover:text-base-500 duration-500" to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className="px-3"><Link className="cursor-pointer hover:text-base-500 duration-500" to="about-features" smooth={true} duration={500}>About Us</Link></li>
                    <li className="px-3"><Link className="cursor-pointer hover:text-base-500 duration-500" to="our-features" smooth={true} duration={500}>Features</Link></li>
                    <li className="px-3"><Link className="cursor-pointer hover:text-base-500 duration-500" to="our-pricing" smooth={true} duration={500}>Pricing</Link></li>
                    <li className="px-3"><Link className="cursor-pointer hover:text-base-500 duration-500" to="contact-us" smooth={true} duration={500}>Contact</Link></li>
                </ul>

                <button className="lg:hidden absolute z-20 right-6 top-6" onClick={toggle}>
                    {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </button>

                <div className={`absolute top-0 ${isOpen ? 'left-0' : 'left-full'} right-0 bottom-0 flex justify-center items-center w-full h-screen lg:hidden bg-black text-center ease-in duration-300`}>
                    <ul>
                        <li className="px-3 py-5 text-2xl hover:text-gray-500">Home</li>
                        <li className="px-3 py-5 text-2xl hover:text-gray-500">About Us</li>
                        <li className="px-3 py-5 text-2xl hover:text-gray-500">Services</li>
                        <li className="px-3 py-5 text-2xl hover:text-gray-500">Clients</li>
                        <li className="px-3 py-5 text-2xl hover:text-gray-500">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar