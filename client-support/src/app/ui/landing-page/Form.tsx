'use client'
import { useState, useRef } from "react"

export default function Form() {
    //const formRef = useRef();
    //const

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
        <div className="flex flex-col lg:flex-row px-[16px] py-[64px] gap-[64px]" style={{ backgroundColor: "#161641" }}>
            <div className="text-white ">
                <h1 className="text-h2">24/7 coverage at a fraction of the cost of in-house receptionists.</h1>
                <p>Don’t believe us? Fill out the form on the right, and we{`'`}ll take you to our pricing page, where you can find out just how little 24/7 legal intake will cost you.</p>
            </div>
            <form onSubmit={() => { console.log('Form submitted') }}
                className="flex flex-col form font-bold"
            >
                <h3 className="text-b1 font-bold">Tell us about yourself. We{`'`}ll show you all of our pricing information on the next page.</h3>
                {
                    formElems.map((elem)=>{
                        return (
                            <div key={`form-${elem.id}`} className="flex flex-col">
                                <label>{elem.label}</label>
                                <input type="text" name={elem.name} id={elem.id} placeholder={elem.label}/>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}