import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <div className='dark:bg-neutral-950'>
      <section className="m-auto max-w-lg py-10 px-6 ">
        <Link
          to='/jobs'
          className="block dark:bg-indigo-700 bg-black text-white text-center py-4 px-6 rounded-xl dark:hover:bg-indigo-500 hover:bg-neutral-800"
        >
          View All Jobs
        </Link>
      </section>
    </div>
  )
}

export default ViewAllJobs
