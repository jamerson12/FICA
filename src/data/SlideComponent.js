import { Carousel } from 'react-carousel-minimal';

const SlideComponent = () => {
 const data = [
    {
      image: "images/1.jpg",
      
    },
    {
      image: "images/2.JPG", 
    },
    {
      image: "images/3.JPG",
    },
    {
      image: "images/4.jpg",
    },
    {
      image: "images/5.jpg",
    },
    {
      image: "images/6.jpg",  
    },
    {
      image: "images/7.jpg", 
    },
    {
      image: "images/8.jpg",
    },   
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
      <div>
          <Carousel
            data={data}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"           
          />
      </div>
    </div>
  );
}
export default SlideComponent;