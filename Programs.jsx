import React from 'react'

const Program = () => {
  return (
    <div>
      <div className='main'>
        <h3 className='main h3' style={{ textAlign: 'center' }}>OUR PROGRAM</h3>
        <h1 style={{ textAlign: 'center', justifyItems: 'center' }}>What we Offer</h1>
      </div>


      <div className='programs'>
        <div className='program'>
          <div className='card'>
            <img src="/Images/st1.jpg" alt="" />
            <p>Graduation </p>
          </div>
        </div>

        <div className='program'>
          <div className='card'>
            <img src="/Images/st2.jpg" alt="" />
            <p>Graduation </p>
          </div>
        </div>
        <div className='program'>
          <div className='card'>
            <img src="/Images/st4.jpg" alt="" />
            <p>Graduation </p>
          </div>

        </div>

      </div >
    </div>
  )
}

export default Program