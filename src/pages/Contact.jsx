import React from "react";
import Heading from "../components/heading/Heading";
import { useForm, ValidationError } from '@formspree/react';


import { motion } from "framer-motion";


const Contact = () => {
    const [state, handleSubmit] = useForm("myzkrlnb");
    if (state.succeeded) {
        return <p className="text-lg md:text-2xl font-semibold"> Message Send Succefully </p>;
    }


    return (
        <>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            >
                <Heading title="Contact us" />

                <form action="#" method="POST" className="mx-auto py-5 px-3" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label
                                for="first-name"
                                className="block text-sm/6 font-semibold"
                            >
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    placeholder="First name"
                                    required
                                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="last-name"
                                className="block text-sm/6 font-semibold "
                            >
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    required
                                    autocomplete="family-name"
                                    placeholder="Second name"
                                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                for="email"
                                className="block text-sm/6 font-semibold "
                            >
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autocomplete="email"
                                    placeholder="Enter email address"
                                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                for="message"
                                className="block text-sm/6 font-semibold "
                            >
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="block w-full rounded-md  px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                        >
                            Let's talk
                        </button>
                    </div>
                </form>
            </motion.div>
        </>
    );
};

export default Contact;
