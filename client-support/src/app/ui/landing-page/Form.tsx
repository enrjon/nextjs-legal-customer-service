'use client'
import { useState, useRef } from "react"

interface FormInput {
    'first-name': string;
        'last-name': string;
        'form-email': string;
        'company-name': string;
        'cell-phone': number;
}

export default function Form() {
    const [form, setForm] = useState({
        'first-name': '',
        'last-name': '',
        'form-email': '',
        'company-name': '',
        'cell-phone': '',
    })
    const [submit, setSubmit] = useState(false);
    const handleChange = () => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }
    const handleSubmit = () => {
        e.preventDefault();
        if (form['first-name'] == '' || form['form-email'] == '' || form['last-name'] == '' || form['company-name'] == ''|| form['cell-phone'] == '') {
            console.log('submitition error')
            console.log(form)
            document.getElementById('form-error')?.classList.remove('hidden')
        } else {
            setSubmit(true);
            console.log('submitted')
            
            document.getElementById('form-error')?.classList.add('hidden')
            setTimeout(() => {
                setSubmit(false)
                console.log('reset')
            }, 5000)
        }


    }
    const formElems = [
        {
            label: 'First Name*',
            name: 'first-name',
            id: 'fname'
        },
        {
            label: 'Last Name*',
            name: 'last-name',
            id: 'lname'
        },
        {
            label: 'Company Name*',
            name: 'company-name',
            id: 'company'
        },
        {
            label: 'Email*',
            name: 'form-email',
            id: 'email'
        },
        {
            label: 'Cell Phone*',
            name: 'cell-phone',
            id: 'cell'
        }
    ];

    return (
        <div className="flex flex-col px-[16px] py-[64px] gap-[64px]" style={{ backgroundColor: "#161641" }}>
            <div className="flex flex-col lg:flex-row gap-[64px] self-center max-w-[1120px]">
                <div className="text-white flex flex-col justify-center gap-[10px] min-w-[400px]">
                    <div className="flex flex-col justify-center gap-[32px]">
                        <h1 className="text-h2 font-bold">24/7 coverage at a fraction of the cost of in-house receptionists.</h1>
                        <p className="text-sub1">Don’t believe us? Fill out the form on the right, and we{`'`}ll take you to our pricing page, where you can find out just how little 24/7 legal intake will cost you.</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col form self-center"
                >
                    <h3 className="text-sub1 font-bold">Tell us about yourself. We{`'`}ll show you all of our pricing information on the next page.</h3>
                    <p id='form-error' className=" hidden text-sub2 error">Please fill in a valid value for all required fieldsFields: Name, Company Name, Email, Phone</p>
                    {
                        formElems.map((elem) => {
                            return (
                                <div key={`form-${elem.id}`} className="flex flex-col gap-[7px]">
                                    <label>{elem.label}</label>
                                    <input type="text"
                                        name={elem.name}
                                        id={elem.id}
                                        placeholder={elem.label}
                                        onChange={handleChange} />
                                </div>
                            )
                        })
                    }
                    <button className="btn flex self-center rounded-[12px] text-h3 p-[16px]">See plans & pricing</button>
                </form>
            </div>

        </div>
    )
}