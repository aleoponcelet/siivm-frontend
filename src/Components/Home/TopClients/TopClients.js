import React from 'react';
import slack from '../../../assets/images/logos/uteg.png';
import google from '../../../assets/images/logos/udg.jpg';
import uber from '../../../assets/images/logos/jalisco2.jpg';
import netflix from '../../../assets/images/logos/tl2.png';
import airbnb from '../../../assets/images/logos/tl1.png';
import './TopClient.css';

const TopClients = () => {
  return (
    <section className='d-flex justify-content-center'>
      <div className='client row'>
        <div className='col-md-12 text-white client-img'>
          <img className='slack' src={slack} alt='' />
          <img className='google' src={google} alt='' />
          <img className='uber' src={uber} alt='' />
          <img className='netflix' src={netflix} alt='' />
          <img className='airbnb' src={airbnb} alt='' />
        </div>
      </div>
    </section>
  );
};

export default TopClients;
