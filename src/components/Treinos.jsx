import React from 'react'

const Treinos = () => {
  return (
    <div id='treinos' className='w-full mb-32 pt-24'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Treinos de Capoeira Angola</h2>
                <p className='text-2xl py-8 text-black'>"A Capoeira Angola é um processo orgânico de conexão entre corpo e mente" <br/> Mestre Jurandir</p>
                <a href='https://goo.gl/maps/ruomJDG9M8CeVrAk8' target='_blank' className='text-2xl underline'>R. das Bandeiras, 37 - Indaiá, Belo Horizonte - MG, 31270-090</a>
            </div>

            <div className='grid md:grid-cols-2 gap-1 px-2 pt-8 text-center '>
                <div className='border py-8 rounded-xl shadow-xl bg-[#F6C203] '>
                    <p className='text-2xl font-bold text-black'>Segunda, Quarta e Sexta</p>
                    <p className='text-gray-900 mt-2 text-2xl font-semibold'>19h - 21h</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-[#F6C203]' >
                    <p className='text-2xl font-bold text-black'>Quinta e Sábado</p>
                    <p className='text-gray-900 mt-2 text-2xl font-semibold'>09h - 11h</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Treinos