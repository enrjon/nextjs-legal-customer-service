'use client'

export default function Form(){
    return (
        <div className="flex flex-row " style={{backgroundColor:"#161641"}}>
            <div className="text-white">
                <h1 className="text-h2">24/7 coverage at a fraction of the cost of in-house receptionists.</h1>
                <p>Don’t believe us? Fill out the form on the right, and we’ll take you to our pricing page, where you can find out just how little 24/7 legal intake will cost you.</p>
            </div>
            <form onSubmit={()=>{console.log('Form submitted')}}
                className="flex flex-col bg-white rounded"
                >
                <span>Tell us about yourself. We’ll show you all of our pricing information on the next page.</span>
                <label>First Name*
                    <input type="text" name="first-name" id="fname" />
                </label>
                <label>Last Name*
                    <input type="text" name="first-name" id="fname" />
                </label>
                <label>Company Name*
                    <input type="text" name="first-name" id="fname" />
                </label>
                <label>Email*
                    <input type="text" name="first-name" id="fname" />
                </label>
                <label>Cell Phone*
                    <input type="text" name="first-name" id="fname" />
                </label>
                
            </form>
        </div>
    )
}