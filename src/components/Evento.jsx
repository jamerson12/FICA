
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaWhatsapp } from "react-icons/fa";
import img1 from '../assets/exemplo.png'
const Evento = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ekyz28b', 'template_az6gpjd', form.current, 'xifv7tVEysYH3AkIe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="evento" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase font-bold text-neutral-900">
          Evento
        </p>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={img1}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4 uppercase font-bold">Nome do evento</h2>
                <h3>Programação do evento</h3>
                <p className="py-4 max-w-[350px]">
                 -Programçao do Evento exemplo oficina as 9 hrs
                 -Programçao do Evento exemplo oficina as 9 hrs
                 -Programçao do Evento exemplo oficina as 9 hrs
                 -Programçao do Evento exemplo oficina as 9 hrs
                 -Programçao do Evento exemplo oficina as 9 hrs
                 
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Participe do nosso evento</p>
                <div className="flex items-center justify-between py-4">
                 
                  
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nome Completo</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Celular
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500"
                      type="text"
                      name="phone"
                      required
                    />
                  </div>
                </div>
               
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Pratica capoeira Angola?</label>
                  <select
                    className="border-2 rounded-lg p-3 flex border-gray-500"
                    type="checkbox"
                    name="pratica"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Qual seu grupo de capoeira?
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-500"
                      type="text"
                      name="grupo"
              
                    />
                  </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Participara quantos dias?</label>
                  <select
                    className="border-2 rounded-lg p-3 flex border-gray-500"
                    type="checkbox"
                    name="dias"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <input type="submit" value="Confirmar Inscrição" className=" shadow-lg rounded-lg uppercase bg-[#F6C203] w-full p-4 text-black font-semibold mt-4 cursor-pointer" />  
                <a href="https://api.whatsapp.com/send?phone=5531975000350&text=Teste%20FICA-BH" className='flex items-center justify-center py-3  uppercase bg-[#34af23] rounded-md font-semibold mt-3 w-full text-black'>
            
              Envie seu comprovante aqui
            <FaWhatsapp className='text-4xl ml-4' />
          </a>              
              </form>
             
            </div>
            
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Evento;
