import { useState} from 'react'
import Navbar from '~/components/Navbar'


type Props = {}

const upload = (props: Props) => {
 const [isProcessing, setIsProcessing] = useState(false);
 const [statusText, setStatusText] = useState('');
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

}
  return (
   <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
   
    <section className="main-section">
        <div className='page-heading py-16'>
            <h1>Smart Feedback for your dream job</h1>
            {isProcessing ? (
                <>
                <h2>{statusText}</h2>
                <img src="/images/resume-scan.gif" alt="" className='w-full' />
                </>
            ):(
                <h2>Drop your resume for an ATS score and improvement tips</h2>
            )}
            {!isProcessing && (
                <form action="" id="upload-form" onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                    <div className='form-div'>
                      <label htmlFor="company-name">
                        Company Name
                      </label>
                      <input type="text" name='company-name' placeholder='Company Name' id='company-name' />
                    </div>
                    <div className='form-div'>
                      <label htmlFor="job-title">
                        Job Title
                      </label>
                      <input type="text" name='job-title' placeholder='Job Title' id='job-title' />
                    </div>
                    <div className='form-div'>
                      <label htmlFor="job-title">
                        Job Title
                      </label>
                      <textarea rows={5} name='job-description' placeholder='Job Description' id='job-description' />
                    </div>
                </form>
            )}
        </div>

    </section>
    </main>
  )
}

export default upload