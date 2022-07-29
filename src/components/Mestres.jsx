import React from 'react';
import jurandir from '../assets/exemplo.png'
import cobrinha from '../assets/exemplo.png'
import valmir from '../assets/exemplo.png'
import fica from '../assets/fica.JPG'

const Mestres = () => {
  return (
  <div id='mestres' className='w-full'>
      <div className='w-full h-[700px] bg-gray-900/70 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={fica} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-gray-50 relative'>
          <div className='px-4'>
              <h2 className='text-3xl pt-24 uppercase text-center'>Mestres</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Fundadores da FICA</h3>
              <p className='py-4 text-xl'>Criada em 1995, pelos mestres Jurandir, Cobra Mansa e Valmir, a Fundação Internacional de Capoeira Angola (FICA) realiza um trabalho de preservação, valorização e difusão da capoeira angola pelo mundo, unindo ações sociais e culturais para promover cidadania e desenvolvimento humano. No Brasil, as suas sedes principais concentram-se nas capitais de Belo Horizonte (MG), Salvador (BA) e Rio de Janeiro (RJ).</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-[#F6C203] rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <img className='rounded-xl shadow-2xl' src={jurandir} alt="" />
                      <h3 className='font-bold text-2xl my-6'>Mestre Jurandir</h3>
                      <p className='text-black text-base'>Mestre Jurandir iniciou-se na capoeira na década de 70, em Duque de Caxias, RJ. Passou a treinar com Mestre Moraes em 1976, fazendo parte da história do Grupo de Capoeira Angola Pelourinho (GCAP) no Rio de Janeiro. Nos anos 80, mudou-se para Belo Horizonte, formando o grupo N`Golo Capoeira Angola. Em 1995, junto aos Mestres Cobra Mansa e Valmir, criou a Fundação Internacional de Capoeira Angola (FICA) e deu início à FICA-Belo Horizonte. Convidado para conduzir um trabalho de capoeira angola nos EUA, fundou a FICA-Seatle, em 1996, onde viveu durante 10 anos. Atualmente, é também responsável pelos núcleos da FICA em Moçambique, Havaí, Texas, Califórnia, Portland (Estado de Washington) e Nova Iorque. Realiza oficinas e palestras sobre a história e a filosofia da capoeira angola em diversas universidades, escolas e em eventos de capoeira no Brasil e no exterior.</p>
                  </div>
                 
              </div>
              <div className='bg-[#F6C203] rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <img className='rounded-xl shadow-2xl' src={valmir} alt="" />
                      <h3 className='font-bold text-2xl my-6'>Mestre Valmir</h3>
                      <p className='text-black text-base'>Mestre Valmir iniciou-se na capoeira no Grupo de Capoeira Angola Pelourinho (GCAP), em 1982, com os mestres Moraes e Cobra Mansa. No ano de 1994 se desligou do GCAP e em 1996 deu início ao núcleo da Fundação Internacional de Capoeira Angola em Salvador, a FICA-Bahia. Recebeu o título de Mestre de Capoeira Angola no IX Encontro Internacional de Capoeira Angola, realizado pela FICA em Belo Horizonte, em 2003. Desenvolve trabalhos sócio-culturais em Salvador e realiza oficinas de Capoeira Angola em diversos países, como EUA, Alemanha, França, Suécia, Inglaterra, além de diversas cidades pelo Brasil.</p>
                  </div>
              </div>
              
              <div className='bg-[#F6C203] rounded-xl shadow-2xl'>
              <div className='p-8'>
                  <img className='rounded-xl shadow-2xl' src={cobrinha} alt="" />
                    <h3 className='font-bold text-2xl my-6'>Mestre Cobra Mansa</h3>
                    <p className='text-black text-base'>Cinézio Feliciano Peçanha (Mestre Cobra Mansa) nasceu na cidade do Rio de Janeiro em 1960 e iniciou-se na capoeira aos 14 anos, em Duque de Caxias, RJ. Em 1976 começou a treinar com Mestre Moraes e participou da fundação do Grupo de Capoeira Angola Pelourinho (GCAP) em Salvador, em 1982. Em 1994, convidado pela Sociedade Aussar Auset, Cobrinha mudou-se para os Estados Unidos, iniciando um trabalho de Capoeira Angola em Washington D.C. Em 1995, junto aos mestres Jurandir e Valmir, fundou a Fundação Internacional de Capoeira Angola (FICA), criando a primeira FICA nos EUA, em Washington D.C. Em 2004 retornou à Salvador, para criar o Kilombo Tenondé, fazenda onde realiza cursos sobre Capoeira Angola e Permacultura. Cobra Mansa dedica-se à manutenção da FICA e divulgação da Capoeira Angola em todo mundo.</p>
               </div>
                  
              </div>
          </div>
      </div>
  </div>
  );
};

export default Mestres;
