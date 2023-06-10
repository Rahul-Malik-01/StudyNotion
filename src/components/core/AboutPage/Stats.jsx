import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section>
        <div className='mt-20'>
            <div className='flex items-center justify-center py-20 gap-x-64 w-full bg-richblack-700'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-4'>
                                <h1 className='font-bold font-inter text-3xl text-center'>
                                    {data.count}
                                </h1>
                                <h2 className='font-light text-richblack-300 text-base text-center'>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
