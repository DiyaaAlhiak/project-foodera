import React from 'react'
import './Home.css'
import Header from './Header'
import pridimg from '../../img/1.png'
 function Home() {
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
    </div>
  )
}
export default Home