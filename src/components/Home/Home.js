import React from 'react'
import './Home.css'
import Header from './Header'
import pridimg from '../../img/1.png'
import ingredients from '../../img/2.png'
import Data from '../../Data'
import Carousel from 'react-bootstrap/Carousel';
import user1 from '../../img/1 (1).jpg';
import user2 from '../../img/2.jpg'

 function Home() {



  const blogitme =Data.map(itme =>{
    return(
      <div className='col-md-4'>
        <div className='box'>
        <img key={itme.id} src={itme.img}/>
        <h5 key={itme.id}>{itme.title}</h5>
      <span key={itme.id}>{itme.time}</span>
        <h6 key={itme.id}>{itme.price}</h6>
        <button href='#'>order now</button>
        </div>
      
      </div>  
    )
  });
  return (
    <div>
    <Header/>
  <section className='numbers'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <h2>1278+</h2>
          <h6>SAINGS</h6>
        </div>
        <div className='col-md-3'>
          <h2>5786+</h2>
          <h6>PHOTOS</h6>
        </div>
        <div className='col-md-3'>
          <h2>1440+</h2>
          <h6>ROCKETS</h6>
        </div>
        <div className='col-md-3'>
          <h2>7110+</h2>
          <h6>GLOBES</h6>
        </div>
  
      </div>
    </div>
  </section>
  <section className='prode'>
    <div className='container'>
      <div className='row'>
         <div className='col-md-6'>
<img src={pridimg} title='img'/>
         </div>
         <div className='col-md-6'>
          <h2> We pride ourselves on making real food from the best ingredients.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
          <button><a href='#'>Leern More</a></button>
          </div>  
      </div>
    </div>
  </section>
  <section className='ingredients'>
<div className='container'>
  <div className='row'>
    <div className='col-md-6'>
<h2>
We make everything by hand with the best possible ingredients.
</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus
   bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word 
   mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
   </p>
   <ul>
    <li>Etiam sed dolor ac diam volutpat.</li>
    <li>Erat volutpat aliquet imperdiet.</li>
    <li>purus a odio finibus bibendum.</li>
   </ul>
   <button>
    <a href='#'>learn more</a>
   </button>
    </div>
    <div className='col-md-6'>
    <img src={ingredients} alt='ingredients'/>
    </div>
  </div>
</div>
  </section>
  <section className='paralex'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12'>
          <h2>
          When a man's stomach is full it makes no<br/>
          difference whether he is rich or poor.
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
             finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
             </p>
             <a href='#'>
              Watch Our Story
             </a>
        </div>
      </div>
    </div>
  </section>
  <section className='blogs'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12'>
<h2>Explore Our Foods</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
      </div>
      <div className='row'>
        {blogitme}
      </div>
    </div>
  </section>
  <section className='slider'>

  <Carousel>
      <Carousel.Item>
        <img className="d-block w-100"src={user1} alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={user2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={user2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </section>
    </div>
  )
}
export default Home