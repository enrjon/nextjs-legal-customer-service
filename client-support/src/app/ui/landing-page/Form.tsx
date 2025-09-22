'use client'
import { useState } from "react"
import { FormInput, formElems } from "@/app/util/forms"

export default function Form() {
    const [form, setForm] = useState<FormInput>({
        'first-name': '',
        'last-name': '',
        'form-email': '',
        'company-name': '',
        'cell-phone': '',
    })

    const clearForm = () => {
        formElems.map((elem) => {
            (document.getElementById(elem.id) as HTMLInputElement).value = '';
            setForm(
                {
                    'first-name': '',
                    'last-name': '',
                    'form-email': '',
                    'company-name': '',
                    'cell-phone': '',
                }
            )
        })
    }

    const handleChange = (e: HTMLInputElement) => {
        const { name, value } = e;

        setForm({ ...form, [name]: value })
    }

    const handleValidation = () =>{
        const labels = document.getElementsByClassName('form-label')
        const inputs = document.getElementsByClassName('form-input')
        for(let i = 0; i < labels.length; i++){
            (labels.item(i) as HTMLInputElement).classList.add('error');
            (inputs.item(i) as HTMLInputElement).classList.add('error');
        }
        document.getElementById('form-error')?.classList.remove('hidden')
        document.getElementById('form-success')?.classList.add('hidden')        
    }
    const handleSubmit = () => {
        const labels = document.getElementsByClassName('form-label')
        const inputs = document.getElementsByClassName('form-input')
        for(let i = 0; i < labels.length; i++){
            (labels.item(i) as HTMLInputElement).classList.remove('error');
            (inputs.item(i) as HTMLInputElement).classList.remove('error');
        }
        console.log('submitted')
        document.getElementById('form-success')?.classList.remove('hidden')
        document.getElementById('form-error')?.classList.add('hidden')
        clearForm()
    }

    return (
        <div className="flex flex-col px-[16px] py-[64px] gap-[64px]" style={{ backgroundColor: "#161641" }}>
            <div className="flex flex-col lg:flex-row gap-[64px] self-center max-w-[1120px]">
                <div className="text-white flex flex-col justify-center gap-[10px]">
                    <div className="flex flex-col justify-center gap-[32px]">
                        <h1 className="text-h2 font-bold">24/7 coverage at a fraction of the cost of in-house receptionists.</h1>
                        <p className="text-sub1">Don’t believe us? Fill out the form on the right, and we{`'`}ll take you to our pricing page, where you can find out just how little 24/7 legal intake will cost you.</p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }}
                    onInvalid={(e) => {
                        e.preventDefault();
                        handleValidation()
                    }}
                    className="flex flex-col form self-center"
                >
                    <h3 className="text-sub1 font-bold">Tell us about yourself. We{`'`}ll show you all of our pricing information on the next page.</h3>
                    <p id='form-error' className=" hidden error form-message">Please fill in a valid value for all required fieldsFields:
                        <strong>Name, Company Name, Email, Phone</strong></p>
                    <p id='form-success' className="hidden success form-message">Thanks for reaching out!</p>
                    {
                        formElems.map((elem) => {
                            return (
                                <div key={`form-${elem.id}`} className="flex flex-col gap-[7px]">
                                    <label className="form-label font-bold">{elem.label}</label>
                                    <input type={elem.type}
                                        name={elem.id}
                                        id={elem.id}
                                        placeholder={elem.label}
                                        required={true}
                                        onSelect={(e)=>{(e.target as HTMLInputElement).placeholder = '...'}}
                                        onBlur={(e)=>{e.target.placeholder = elem.label}}
                                        onChange={(e) => { handleChange(e.target) }}
                                        className="form-input" />
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