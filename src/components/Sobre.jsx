import React from 'react'
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import ficalogo from '../assets/ficalogo.svg'

const Sobre = () => {
  return (
    <div id='sobre' className='w-full h-[980px] bg-neutral-900 text-gray-50 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl pt-12'>FICA - Belo Horizonte</p>
                <h1 className='py-3 text-5xl md:text-6xl font-bold'>Fundação Internacional de Capoeira Angola</h1>
                <p className='text-2xl uppercase py-2 font-bold '>Mestre Jurandir</p>
                <p className='font-semibold pt-2'>Em Belo Horizonte, a FICA funciona sob a coordenação do Mestre Jurandir e realiza trabalhos com públicos de diversas idades, além de atividades sócio-educativas com crianças e adolescentes.
                </p>
                <h2 className='flex justify-center pt-4 font-semibold'>Entre em contato com a FICA</h2>
                <div className='flex flex-wrap items-center justify-center gap-4 pt-4'>
                <a href="https://www.instagram.com/ficabh_/" target='_blank'>
                <FaInstagram className='text-3xl' />
                </a>
                <a href="https://www.facebook.com/ficabh" target='_blank'>
                <FaFacebook className='text-3xl' />
                </a>
                <a href="mailto:quilombo.fica.bh@gmail.com" target='_blank'>
                <MdEmail className='text-4xl' />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5531975000350&text=Teste%20FICA-BH" target="_blank">
                <FaWhatsapp className='text-3xl' />
                </a>
                </div>
                
            </div>
            <div className='flex items-center justify-self-center'>
            
                <img className='w-full' src={ficalogo} alt="/" />
            </div>
            
        </div>
        
    </div>
  )
}

export default Sobre