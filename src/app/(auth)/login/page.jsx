"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {register,watch ,handleSubmit,formState: { errors }} = useForm()
    const handelLoginFunc = (data) => {
       console.log(data);    

    }
    console.log(watch("email"));
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>


                <form className='space-y-4' onSubmit={handleSubmit(handelLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email" ,{ required: "email field is required" })}  className="input" placeholder="Type your email" />
                             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" {...register("password",{ required: "password field is required" })} className="input" placeholder="Type your password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                <p className='mt-4'>Don't have an account? <Link className='text-blue-500' href={"/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;