import React from 'react'
import ContactForm from './ContactForm'
import { Alert } from './Alert';

type Props = {}

function Contact({}: Props) {
  return (
    <div className="container mx-auto border-t pt-8">
        <div className="flex flex-wrap justify-center gap-4">
            <div className="flex">
                <div className="p-8 w-96 min-h-[28rem]">
                    <div className="p-4">
                        <h2 className="text-2xl text-base-600">Contact Us</h2>
                        <p className="flex flex-row py-8 text-base-500">If you would like to contact us, you can use either the form below or to contact us via email, please email us at: info@conveyancingwebsites.co.uk</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="p-8 w-96 md:w-[48rem] min-h-[28rem]">
                    <Alert />
                    <ContactForm />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact