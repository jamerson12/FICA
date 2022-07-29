import React from 'react';
import gabriel from '../assets/exemplo.png'
import thiago from '../assets/exemplo.png'

const Contramestres = () => {
  return (
    <div id='contramestres' className='w-full py-12 mt-32 bg-neutral-900'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-4xl font-bold text-center uppercase text-gray-50 pt-12 '>Contramestres</h2>
        <p className='text-2xl py-8 text-gray-50 text-center'>
         Os Contramestres da FICA em Belo Horizonte
        </p>

        <div className='grid lg:grid-cols-2 gap-4 pt-4'>

          <div className='flex'>
            <div className='bg-[#F6C203] rounded-xl shadow-2xl'>
              <div className='p-8'>
                  <img className='rounded-xl shadow-2xl' src={gabriel} alt="" width={400} />
                    <h3 className='font-bold text-2xl my-6'>Contramestre Gabriel</h3>
                    <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil, expedita cumque a officia vitae voluptas sequi, rem similique, blanditiis quisquam! Cumque ratione quas ducimus harum, facilis provident. Optio, aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur dolor, voluptates minima incidunt dolorem. Voluptas debitis temporibus laborum, ad quae commodi minus, magni architecto voluptates reiciendis nesciunt blanditiis optio?
                    </p>
               </div>
                  
              </div>
          </div>
          <div className='bg-[#F6C203] rounded-xl shadow-2xl'>
              <div className='p-8'>
                  <img className='rounded-xl shadow-2xl' src={thiago} alt="" width={400} />
                    <h3 className='font-bold text-2xl my-6'>Contramestre Thiago</h3>
                    <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex aut quam vero veniam, esse quas odit vitae mollitia, exercitationem a rem, nisi asperiores vel. Voluptates natus at velit fugiat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque omnis voluptatibus beatae aut nam inventore, fuga modi corporis quis, similique maiores libero impedit at! Natus quisquam est ad accusantium!
                    </p>
               </div>
                  
              </div>
          
          
          

        </div>
      </div>
    </div>
  );
};

export default Contramestres;
