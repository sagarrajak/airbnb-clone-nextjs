'use client'

import React from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState, useCallback } from 'react'
import {
    useForm,
    FieldValue,
    SubmitHandler
} from 'react-hook-form';
import useRegisterModel from '@/app/hooks/useRegisterModel'
import Modal from './Models'

export interface RegisterModelInterface {

}

interface LoginForm {
    name: string;
    email: string;
    password: string;
}

const RegisterModel: React.FC<RegisterModelInterface> = ({ }) => {
    const registerModel = useRegisterModel();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        mode: 'all',
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data).then(() => {

        })
        .catch(() => {

        })
        .finally(() => {
            setIsLoading(false)
        })
}

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
        />
    )
}

export default RegisterModel