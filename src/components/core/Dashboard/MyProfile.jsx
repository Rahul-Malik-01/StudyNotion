import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { RiEditBoxLine } from 'react-icons/ri'

const MyProfile = () => {

    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();
    return (
        <div className='text-white max-w-[75%] flex flex-col items-start mx-auto justify-center'>

            <h1 className='mb-14 mt-4 text-3xl leading-8 font-medium tracking-wide text-richblack-5'>
                My Profile
            </h1>

            {/* section 1 */}
            <div className='w-full flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 mb-12'>
                <div className='flex flex-row items-center gap-4'>
                    <img
                        src={user?.image}
                        alt={`profile-${user?.firstName}`}
                        className='aspect-square w-[78px] rounded-full object-cover' />
                    <div>
                        <p className='text-lg font-semibold tracking-wide text-richblack-5'>
                            {user?.firstName + " " + user?.lastName}
                        </p>
                        <p className='text-sm tracking-wide text-richblack-300'>
                            {user?.email}
                        </p>
                    </div>
                </div>
                <IconBtn
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }} >  
                    <RiEditBoxLine />  
                </IconBtn>
            </div>

            {/* section 2 */}
            <div className='w-full flex flex-col justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 mb-12'>
                <div className='flex flex-row items-center justify-between mb-4'>
                    <p className='text-lg font-semibold tracking-wide text-richblack-5'>
                        About
                    </p>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }} >
                        <RiEditBoxLine />
                    </IconBtn>
                </div>
                <p className='text-richblack-400 tracking-wide text-sm font-medium'>
                    {user?.additionalDetails?.about
                        ?? "Write Something about Yourself"}
                </p>
            </div>

            {/* section 3 */}
            <div className='w-full flex flex-col justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 mb-8'>
                <div className='flex flex-row items-center tracking-wide justify-between mb-4'>
                    <p>Personal Details</p>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }} >
                        <RiEditBoxLine />
                    </IconBtn>
                </div>
                <div className='flex tracking-wide max-w-[500px] justify-between'>
                    {/* left part  */}
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>
                                First Name
                            </p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {user?.firstName}
                            </p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>
                                Email
                            </p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {user?.email}
                            </p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>
                                Gender
                            </p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {user?.additionalDetails?.gender ?? "Add Gender"}
                            </p>
                        </div>
                    </div>

                    {/* right part */}
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>
                                Last Name
                            </p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {user?.lastName}
                            </p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>
                                Phone Number
                            </p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
                            </p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>
                                Date of Birth
                            </p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MyProfile
