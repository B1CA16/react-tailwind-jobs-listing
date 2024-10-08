import {useParams, useLoaderData, useNavigate} from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const {id} = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm  = window.confirm('Are you sure you want to delete this listing?')
    
    if(!confirm) return;

    deleteJob(jobId);

    toast.success('Job deleted successfully');

    return navigate('/jobs');
  }

  return <>
    <section className='dark:bg-neutral-800'>
      <div className="container dark:bg-neutral-800 m-auto py-6 px-6">
        <Link
          to='/jobs'
          className="text-indigo-500 hover:text-indigo-700 flex items-center"
        >
          <FaArrowLeft className='mr-2' /> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="dark:bg-neutral-900 bg-indigo-50 h-screen">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="dark:bg-neutral-800 bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4 dark:text-neutral-300">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4 dark:text-white">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 dark:text-orange-600 mr-2' />
                <p className="text-orange-700 dark:text-orange-600">{job.location}</p>
              </div>
            </div>

            <div className="dark:bg-neutral-800 bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 dark:text-indigo-600 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4 dark:text-white">
               {job.description}
              </p>

              <h3 className="text-indigo-800 dark:text-indigo-600 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4 dark:text-white">{job.salary} / Year</p>
            </div>
          </main>

          <aside>
            <div className="dark:bg-neutral-800 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Company Info</h3>

              <h2 className="text-2xl dark:text-white">{job.company.name}</h2>

              <p className="my-2 dark:text-white">
                {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl dark:text-white">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 dark:bg-neutral-950 rounded-md truncate dark:text-neutral-300 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 className="text-xl dark:text-white">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 dark:bg-neutral-950 rounded-md dark:text-neutral-300 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

            <div className="dark:bg-neutral-800 bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link
              >
              <button
                onClick={ () => onDeleteClick(job.id) }
                className="bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </>

}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export {JobPage as default, jobLoader}
