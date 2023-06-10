'use client'

import React from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState, useCallback } from 'react'
import {
    useForm,
    FieldValues,
    SubmitHandler
} from 'react-hook-form';
import useRegisterModel from '@/app/hooks/useRegisterModel'
import Modal from './Models'
import Heading from '../heading/Heading'
import { Input } from '../input/Input'

export interface RegisterModelInterface {

}

const RegisterModel: React.FC<RegisterModelInterface> = ({ }) => {
    const registerModel = useRegisterModel();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        mode: 'all',
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data).then(() => {

        })
        .catch(() => {

        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const bodyContent = (
        <div className="
          flex
          flex-col
          gap-3
        ">
            <Heading
                title='Welcome to airbnb'
                subTitle='Create an account'
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
            />
            <Input
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
            />
            <Input
                id='password'
                label='password'
                disabled={isLoading}
                register={register}
                type='password'
                errors={errors}
            />
        </div>
    );

    const footerContent = (
        
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModel.isOpen}
            title='Register'
            actionLabel='Continue'
            onClose={() => {
                registerModel.onClose()
            }}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    )
}

export default RegisterModel