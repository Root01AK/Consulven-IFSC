import React from 'react';
import { assets } from "../assets/assets";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className='spinner-rotate'>
        <img src={assets.LogoGreen} className='logoGreen' alt="" />
        <img src={assets.LogoblueUp} className='logoBlueTop' alt="" />
        <img src={assets.LogoblueDown} className='logoBlueDown' alt="" />
        {/* <img src={assets.abouticon} className='spinnerLogo' alt="" /> */}
      </div>
    </div>
  );
};

export default Spinner;