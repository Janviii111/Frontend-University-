import React, { useRef, tx, slider } from 'react'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import { Button } from '@mui/base';


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx += 25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;

  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }



  return (

    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <h3 style={{ color: '#212EA0' }}>Testimonials</h3>
      <h2 style={{ fontWeight: '60px' }}>What Student Says</h2>
      <div className='testimonials'>


        <Button className='nxtbtn'onclick={(slideForward)}><KeyboardDoubleArrowLeftSharpIcon   />forward</Button>
        <Button className='bckbtn'onclick={(slideBackward)}><KeyboardDoubleArrowRightSharpIcon   />backard</Button>
        <div className='slider'>
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src='/Images/tt1.jpg' alt='' />
                  <div>
                    <h3>Pooja Sharma</h3>
                    <span>RTMNU ,Mumbai</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at RTMNU was one of the best education i 've ever made.<br />
                  The faculty at RTMNU is composed of knowledgeable and dedicated<br /> teachers who contribute significantly to the academic experience.
                  Students appreciate the <br />guidance and support they receive from the staff.
                </p>
              </div>
            </li>

            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src='/Images/st1.jpg' alt='' />
                  <div>
                    <h3>Achal Jonhson</h3>
                    <span>RTMNU ,Mumbai</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at RTMNU was one of the best education i 've ever made.<br />
                  The faculty at RTMNU is composed of knowledgeable and dedicated teachers who <br />contribute significantly to the academic experience.
                  Students appreciate the guidance and support they <br />receive from the staff.
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src='/Images/st2.jpg' alt='' />
                  <div>
                    <h3>Shreya Thakre</h3>
                    <span>RTMNU ,Nagpur</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at RTMNU was one of the best education i 've ever made.<br />
                  The faculty at RTMNU is composed of knowledgeable and <br />dedicated teachers who contribute significantly to the academic experience.
                  Students appreciate<br /> the guidance and support they receive from the staff.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Testimonials