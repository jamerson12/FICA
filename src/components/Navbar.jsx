import React, {useState, useEffect} from 'react'
import ficalogo from '../assets/ficalogo.svg'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#F6C203]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <a href="#">
          <img src={ficalogo} alt="" width={75} />
        </a>
        <div>
          <ul className='hidden md:flex font-semibold'>
            <a href="#sobre"><li className='ml-10 text-sm uppercase hover:border-b border-neutral-900'>Sobre</li>
            </a>
            <a href="#mestres"><li className='ml-10 text-sm uppercase hover:border-b border-neutral-900'>Mestres</li>
            </a>
            <a href="#contramestres"><li className='ml-10 text-sm uppercase hover:border-b border-neutral-900'>Contramestres</li>
            </a>
            <a href="#treinos"><li className='ml-10 text-sm uppercase hover:border-b border-neutral-900'>Treinos</li>
            </a>
            <a href="#arquivos"><li className='ml-10 text-sm uppercase hover:border-b border-neutral-900'>Arquivos</li>
            </a>
            <a href="#evento"><li className='ml-10 text-sm uppercase hover:border-b border-neutral-900'>Eventos</li>
            </a>
          </ul>
          
          {/*menu mobile*/}

          <div onClick={handleNav} className='md:hidden mr-4'>
            <AiOutlineMenu size={35}/>
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F6C203] p-10 ease-in duration-500'
          :'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div onClick={() => setNav(false)} className='flex w-full items-center justify-between'>
              <a href="#">
              <img src={ficalogo} alt="" width={80} />
              </a>
              <div onClick={handleNav} className='rounded-lg shadow-lg shadow-neutral-800 p-3 cursor-pointer'>
                <AiOutlineClose  />
              </div>
            </div>
            <div className='border-b border-neutral-900 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 font-semibold uppercase'>Fica-BH</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase font-semibold'>
              <a href="#sobre">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Sobre</li>
              </a>
              <a href="#mestres">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Mestres</li>
              </a>
              <a href="#contramestres">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contramestres</li>
              </a>
              <a href="#treinos">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Treinos</li>
              </a>
              <a href="#arquivos">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Arquivos</li>
              </a>
              <a href="#evento">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Evento</li>
              </a>
            </ul>
            <div className='pt-8'>
              <p className='uppercase font-semibold'>Entre em contato com a FICA - BH
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div onClick={() => setNav(false)} className='rounded-lg shadow-lg shadow-neutral-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl bg-neutral-900 text-white'>
                  <a href="https://www.instagram.com/ficabh_/" target="_blank">
                  <FaInstagram />
                  </a>
                </div>
                <div onClick={() => setNav(false)} className='rounded-lg shadow-lg shadow-neutral-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl bg-neutral-900 text-white'>
                  <a href="https://www.facebook.com/ficabh" target="_blank">
                  <FaFacebook />
                  </a>
                </div>
                <div onClick={() => setNav(false)} className='rounded-lg shadow-lg shadow-neutral-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl bg-neutral-900 text-white'>
                  <a href="mailto:quilombo.fica.bh@gmail.com" target='_blank'>
                  <MdEmail />
                  </a>
                  
                </div>
                  <div onClick={() => setNav(false)} className='rounded-lg shadow-lg shadow-neutral-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl bg-neutral-900 text-white'>
                    <a href="https://api.whatsapp.com/send?phone=5531975000350&text=Teste%20FICA-BH" target="_blank">
                      <FaWhatsapp />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar