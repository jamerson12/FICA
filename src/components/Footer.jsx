import React from 'react'

import { FaFacebook, FaInstagram, FaWhatsapp,} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='w-full px-2 bg-neutral-900 text-white'>
        <div className='max-w-[1240px] mx-auto pt-8 grid grid-cols-1 gap-8'>
            <h2 className='font-semibold text-center'>"Capoeirista não é aquele que sabe movimentar o corpo, e sim aquele que se deixa movimentar pela alma" Mestre Pastinha</h2>
            <div className='flex justify-center items-center  gap-4'>
          <a href="https://www.instagram.com/ficabh_/" target='_blank'>
                <FaInstagram className='text-4xl' />
                </a>
                <a href="https://www.facebook.com/ficabh" target='_blank'>
                <FaFacebook className='text-4xl' />
                </a>
                <a href="mailto:quilombo.fica.bh@gmail.com" target='_blank'>
                <MdEmail className='text-4xl' />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5531975000350&text=Teste%20FICA-BH" target="_blank">
                <FaWhatsapp className='text-4xl' />
                </a>
            </div>
            <div>
              <a href='https://goo.gl/maps/ruomJDG9M8CeVrAk8' target='_blank' className='flex justify-center text-center font-semibold'>R. das Bandeiras, 37 - Indaiá, Belo Horizonte - MG, 31270-090</a>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-center sm:flex-row text-center'>
        <p className='py-4'><span>&#169; {new Date().getFullYear()}</span> FICA-BH todos direitos reservados</p>
        </div>
    </div>
  )
}

export default Footer