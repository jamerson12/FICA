import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const Galeria = () => {

const [toggler, setToggler] = useState(false);

return (
<>
<button onClick={() => setToggler(!toggler)} className='w-[80%] py-3 px-6 sm:w-[30%] mt-6'>
Galeria completa de fotos e videos
</button>
<FsLightbox
toggler={toggler}
sources={[
'images/1.jpg',
'images/2.JPG',
'images/3.JPG',
'images/4.jpg',
'images/5.jpg',
'images/6.jpg',
'images/7.jpg',
'images/8.jpg',
'https://www.youtube.com/watch?v=z6Q-IRslirM',

]}

/>
</>
);
}

export default Galeria;