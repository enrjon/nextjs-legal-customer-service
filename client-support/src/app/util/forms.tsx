export interface FormInput {
    'first-name': string;
    'last-name': string;
    'form-email': string;
    'company-name': string;
    'cell-phone': string;
}

export const formElems = [
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