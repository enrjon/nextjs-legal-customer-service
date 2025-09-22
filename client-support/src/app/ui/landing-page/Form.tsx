'use client'
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { useState, useRef } from "react"

interface FormInput {
    'first-name': string;
    'last-name': string;
    'form-email': string;
    'company-name': string;
    'cell-phone': string;
}

export default function Form() {
    const [form, setForm] = useState({
        'first-name': '',
        'last-name': '',
        'form-email': '',
        'company-name': '',
        'cell-phone': '',
    })

    const clearForm = ()=> {
        formElems.map((elem)=>{
            (document.getElementById(elem.id) as HTMLInputElement).value = '';
            console.log(elem)
        })
    }

    //const [submit, setSubmit] = useState(false);
    const handleChange = (e : HTMLInputElement) => {
        const { name, value } = e;

        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e : FormInput) => {
        console.log(e)
        
        if (form['first-name'] == '' || form['form-email'] == '' || form['last-name'] == '' || form['company-name'] == '' || form['cell-phone'] == '') {
            console.log('submitition error')
            console.log(form)
            document.getElementById('form-error')?.classList.remove('hidden')
            //document.getElementById('form-success')?.classList.remove('hidden')
        } else {
            
            console.log('submitted')
            document.getElementById('form-success')?.classList.remove('hidden')
            document.getElementById('form-error')?.classList.add('hidden')
            clearForm()
            setTimeout(() => {
                console.log('reset')
            }, 5000)
        }


    }
    const formElems = [
        {
            label: 'First Name*',
            name: 'first-name',
            type: 'text',
            id: 'fname'
        },
        {
            label: 'Last Name*',
            name: 'last-name',
            type: 'text',
            id: 'lname'
        },
        {
            label: 'Company Name*',
            name: 'company-name',
            type: 'text',
            id: 'company'
        },
        {
            label: 'Email*',
            name: 'form-email',
            type: 'email',
            id: 'email',
        },
        {
            label: 'Cell Phone*',
            name: 'cell-phone',
            type: 'tel',
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
                    onSubmit={(e)=>{
                        e.preventDefault();
                        handleSubmit(form)
                    }}
                    className="flex flex-col form self-center"
                >
                    <h3 className="text-sub1 font-bold">Tell us about yourself. We{`'`}ll show you all of our pricing information on the next page.</h3>
                    <p id='form-error' className=" hidden error form-message">Please fill in a valid value for all required fieldsFields: Name, Company Name, Email, Phone</p>
                    <p id='form-success' className="hidden success form-message">Thanks for reaching out!</p>
                    {
                        formElems.map((elem) => {
                            return (
                                <div key={`form-${elem.id}`} className="flex flex-col gap-[7px]">
                                    <label>{elem.label}</label>
                                    <input type={elem.type}
                                        name={elem.name}
                                        id={elem.id}
                                        placeholder={elem.label}
                                        onChange={(e) => { handleChange(e.target) }} />
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