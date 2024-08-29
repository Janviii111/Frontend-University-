import React from 'react'

const About = () => {
    return (
        <div>
        <div className='about'>
            <div className='about-left'>
                <img src="/Images/iconv.png" alt='' className='icon-img' />
                <img src="/Images/st3.jpg" alt='' className='about-img' />
            </div>
            <div className='about-right'>
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Embark on transformative education journey with our university comprehensive education program.
                    Our cutting-edge curriculum is designed to empower students with the knowledge,
                    skills and experience needed to excel in the dynamic field of education.</p>
                <p>With the focus on innovation ,hands on learnings ,and personalized mentorship our program prepare
                    aspiring educators to make a meaningful impact in classroom ,schools and communities </p>
                <p>Wheather you aspire to become a teacher, administrator, counselor, or educatiomal leader, our diverse range Of
                    program offers the perfect pathway to achive your goals and unlock your full potential in shaping the future of education.</p>

            </div>
        </div>
        <h2 style={{textAlign:'center',color:'#212EA0', fontSize:'20px'}}>GALLERY</h2>
        <h1 style={{textAlign:'center' , color:'#000F38'}}>Campus Photo</h1>
        
        </div>
    )
}
export default About