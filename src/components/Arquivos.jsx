import React from 'react';
import SlideComponent from '../data/SlideComponent';
import Galeria from '../data/Galeria';
const Arquivos = () => {
  return (
    <div id='arquivos' className='w-full h-full text-gray-50 pb-16 bg-neutral-900 pt-16'>
      <h2 className='text-4xl font-bold text-center py-8'>Arquivos FICA-BH</h2>
      <div className='w-full h-full mix-blend-overlay'></div>
      
      <div className='flex flex-col justify-center items-center'>
        <div className=''>
        </div>
         <SlideComponent />
      </div>
      <div className='flex justify-center'>
      <Galeria />
      </div>
    </div>
  );
};

export default Arquivos;
