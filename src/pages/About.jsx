import React from 'react'
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from '../components/common/Footer'

const About = () => {
  return (
    <div className='mx-auto text-white'>
      {/* section 1 */}
      <section className='bg-richblack-700  pt-[100px] pb-[14rem]'>
        <div className='w-11/12 max-w-maxContent flex flex-col items-center text-center mx-auto'>
            <p className='mb-16 text-richblack-300'>About us</p>
            <header className='flex flex-col items-center mb-16'>
                <div className='flex flex-col text-4xl font-semibold mb-8'>
                    Driving Innovation in Online Education for a 
                    <HighlightText text={"Brighter Future"}/>
                </div>
                <p className='w-[59%] font-medium text-[1rem] text-richblack-300'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            </header>
            <div className='flex gap-x-3 mx-auto absolute -bottom-8'>
                <img src={BannerImage1} alt=''/>
                <img src={BannerImage2} alt=''/>
                <img src={BannerImage3} alt=''/>
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section className='mt-[10rem]'>
        <div className='w-11/12 max-w-maxContent flex flex-col items-center text-center mx-auto'>
            <Quote/>
        </div>
      </section>
      <div className='h-[1px] bg-richblack-700 w-full mt-20'></div>


      {/* section 3 */}

      <section>
        <div className='flex flex-col mt-14 pt-8 gap-32 w-11/12 max-w-maxContent mx-auto'>
            {/* foudning story wala div */}
            <div className='flex flex-row justify-between items-center'>
                {/* founding story left box */}
                <div className='flex flex-col w-[40%] gap-8'>
                    <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Founding Story</h1>

                    <p className='text-[1rem] font-medium text-richblack-300'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                    <p className='text-[1rem] font-medium text-richblack-300'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                </div>
                {/* foudning story right box */}
                <div className='w-[45%]'>
                    <img  src={FoundingStory} alt=''/>
                </div>
            </div>

            {/* vision and mission wala parent div */}
            <div className='flex flex-row justify-between items-center'>
                {/* left box */}
                <div className='flex flex-col w-[40%] gap-8'>
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Vision</h1>
                    <p className='text-[1rem] font-medium text-richblack-300'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>

                {/* right box */}
                <div className='flex flex-col w-[45%] gap-8 lg:pr-24'>
                    <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                        Our Mission
                    </h1>
                    <p className='text-[1rem] font-medium text-richblack-300'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
        </div>
      </section>  

      {/* section 4 */}
      <StatsComponent/>  
      
      {/* section 5 */}
      <section className='w-11/12 mt-20 mx-auto flex flex-col items-center justify-between gap-5 mb-[140px]'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      <section className='mt-24'>
        <div className='flex flex-col items-center'>
            <p className='text-center text-4xl font-semibold mt-8 pb-8'>
                Reviews from other learners
            </p>
            {/* <ReviewSlider /> */}
        </div>
      </section>

      <Footer/>

    </div>
  )
}

export default About
