import React from 'react';
import {
  FaGithub, FaEnvelope, FaPhoneAlt, FaLocationArrow, FaLocationPin, FaLinkedin, FaYoutube, FaGlobe
} from 'react-icons/fa';

import {
  MdLocationOn
} from 'react-icons/md';



function Contact() {

  const iconstyle =
  {
    color: 'rgb(173, 82, 160)',
    fontSize: '2rem'
  }
  const linktarget =
  {
    textDecoration: 'none',
    color: 'black'

  }
  const phoneInfoStyle = {
    marginLeft: '20px', // Adjust the spacing as per your requirement
  }

  const officeTextStyle = {
    marginTop: '0px', // Adjust the spacing as per your requirement
    fontSize: '14px', // Adjust the size as per your requirement
  }

  return (
    <div className='container my-3'>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
        <div className="card" style={{ width: '60rem' }}>
          <div className="card-header" style={{ backgroundColor: '#d9ff0773' }}>
            <div className="card-header">
              <h3> Bussiness Card</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title mb-3">Bussiness Card</h5>
              <strong className="card-text mb-1">share my Bussiness card.</strong>
              <p className="card-subtitle text-muted" >All my attende are welcome to see my content.</p>
            </div>
            <div>

            </div>
          </div>

          <div className="d-flex justify-content-center " style={{  backgroundColor: '#d9ff0773', flexWrap: 'wrap' }}>
            <div className="card-body d-flex flex-column align-items-center mb-1">
              <img src="profile.png" className="card-img-top rounded-circle" style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt="profile-img" />
              <h5 className="card-title">Luv Laijyour</h5>
              <h6 className="card-subtitle mb-4 text-muted">Developer </h6>
              <h6 className="card-subtitle mb-4 text-muted">Founder : Rakshak Helmet </h6>

            </div>

            <div className="card-body mb-1" >
              <div className="my-1 d-flex">
                <div> <FaPhoneAlt style={iconstyle} />  </div>
                <div style={phoneInfoStyle}>
                  <span>+91 238288237</span>
                  <p className='text-muted' style={officeTextStyle}>Office</p>
                </div>
              </div>
              <div className="my-1 d-flex">
                <div>  <FaEnvelope style={iconstyle} /> </div>
                <div style={phoneInfoStyle}>
                  <a href="mailto:luvjadaun786@gmail.com" target='blank' style={linktarget} >luvjadaun786@gmail.com</a>
                  <p className='text-muted' style={officeTextStyle}>work</p>
                </div>
              </div>
              <a href="https://www.google.com/maps/@26.982661,75.755671,16z?entry=ttu" target="_blank" style={linktarget}>
                <div className="my-1 d-flex">
                  <div><MdLocationOn style={iconstyle} /></div>
                  <div style={phoneInfoStyle}>
                    <span>Jaipur, Rajasthan, India</span>
                    <p className='text-muted' style={officeTextStyle}>Office</p>
                  </div>
                </div>
              </a>
              <div className="my-1 d-flex">
                <div> <FaLinkedin style={iconstyle} /> </div>
                <div style={phoneInfoStyle}>
                  <a href='https://www.linkedin.com/in/luv-thakur-623b09201/' target='blank' style={linktarget}>Linkdein</a>
                  <p className='text-muted' style={officeTextStyle} >https://www.linkedin.com/in/luv-thakur-623b09201/</p>
                </div>
              </div>
            </div>

            <div className="card-body mb-1" >
              <div className="my-1 d-flex">
                <div> <FaGlobe style={iconstyle} /> </div>
                <div style={phoneInfoStyle}>
                  <a href='https://luvthakur.github.io/' target='blank' style={linktarget}>luvthakur.github.io</a>
                  <p className='text-muted' style={officeTextStyle} >website</p>
                </div>
              </div>

              <div className="my-1 d-flex">
                <div> <FaGithub style={iconstyle} /> </div>
                <div style={phoneInfoStyle}>
                  <a href='https://github.com/LuvThakur/' target='blank' style={linktarget}>Github</a>
                  <p className='text-muted' style={officeTextStyle} >https://github.com/LuvThakur/</p>
                </div>
              </div>

              <div className="my-1 d-flex">
                <div> <FaYoutube style={iconstyle} /> </div>
                <div style={phoneInfoStyle}>
                  <a href='https://www.youtube.com/@Laijyour' target='blank' style={linktarget}> Youtube </a>
                  <p className='text-muted' style={officeTextStyle} >https://www.youtube.com/@Laijyour</p>
                </div>
              </div>

            </div>

          </div>

          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>

      </div>
    </ div >
  );
}

export default Contact;

{/* 
        <div style={{ backgroundColor: 'rgb(163,42,142)' }}>
          <h2>Link Presentaion</h2>
          <p> step 5 of 6</p>
        </div>
        <div>
          <h2>Link Presentaion</h2>
          <p> step 5 of 6</p>
        </div> */}