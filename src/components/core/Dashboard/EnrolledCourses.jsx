import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from '../../../services/operations/profileAPI';
import ProgressBar from '@ramonak/react-progress-bar';

const EnrolledCourses = () => {

    const {token}  = useSelector((state) => state.auth);

    const [enrolledCourses, setEnrolledCourses] = useState(null);


    const getEnrolledCourses = async() => {
        try{
            const response = await getUserEnrolledCourses(token);
            setEnrolledCourses(response);
        }
        catch(error) {
            console.log("Unable to Fetch Enrolled Courses");
        }
    }

    useEffect(()=> {
        getEnrolledCourses();
    },[]);


  return (
    <div className='mx-auto w-11/12 max-w-[75%] py-10'>

        {
            !enrolledCourses ? (
                <div className='flex items-center justify-center mt-48'>
                    <div class="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
            : !enrolledCourses.length 
            ? (
                <div>
                    <div className='text-3xl text-richblack-50'>Enrolled Courses</div>
                    <p className='text-richblack-5 text-center text-xl mt-14'>
                        You have not enrolled in any course yet !
                    </p>
                </div>
            )
            : (
                <div>
                    <div className='text-3xl text-richblack-50'>Enrolled Courses</div>
                    <div>
                        <p>Course Name</p>
                        <p>Durations</p>
                        <p>Progress</p>
                    </div>

                    
                    {
                        enrolledCourses.map((course,index)=> (
                            <div>
                                <div>
                                    <img  src={course.thumbnail} alt=''/>
                                    <div>
                                        <p>{course.courseName}</p>
                                        <p>{course.courseDescription}</p>
                                    </div>
                                </div>

                                <div>
                                    {course?.totalDuration}
                                </div>

                                <div>
                                    <p>Progress: {course.progressPercentage || 0}%</p>
                                    <ProgressBar
                                        completed={course.progressPercentage || 0}
                                        height='8px'
                                        isLabelVisible={false}
                                        />
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
      
    </div>
  )
}

export default EnrolledCourses
