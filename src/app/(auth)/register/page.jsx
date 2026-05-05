"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {register,watch ,handleSubmit,formState: { errors }} = useForm()
    const handelRegisterFunc =  async(data) => {
        const {email,name,password,photo} =data ;
       console.log(name,password,email,photo);    
        
       
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>


                <form className='space-y-4' onSubmit={handleSubmit(handelRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email" ,{ required: "email field is required" })}  className="input" placeholder="Type your email" />
                             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" {...register("name" ,{ required: "name field is required" })}  className="input" placeholder="Type your name" />
                             {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" {...register("photo" ,{ required: "Photo URL field is required" })}  className="input" placeholder="Type your Photo URL" />
                             {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" {...register("password",{ required: "password field is required" })} className="input" placeholder="Type your password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;