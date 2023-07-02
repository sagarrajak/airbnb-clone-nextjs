'use client'

import React from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState, useCallback } from 'react'
import {
    useForm,
    FieldValues,
    SubmitHandler
} from 'react-hook-form';
import Modal from './Models'
import Heading from '../heading/Heading'
import { Input } from '../input/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import useLoginModel from '@/app/hooks/useLoginModel'
import { useRouter } from 'next/navigation'

export interface LoginModelInterface {

}

const LoginModel: React.FC<LoginModelInterface> = ({ }) => {
    const loginModel = useLoginModel();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        mode: 'all',
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', {...data, redirect: false})
        .then((callback) => {
            setIsLoading(false)
            if(callback?.ok) {
                toast.success("Logged in")
                router.refresh();
                loginModel.onClose();
            } else if (callback?.error) {
                toast.error(callback?.error);
            }
        })
      }

    const bodyContent = (
        <div className="
          flex
          flex-col
          gap-3
        ">
            <Heading
                title='Welcome back'
                subTitle='Login to your account!'
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='password'
                label='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type='password'
            />
        </div>
    );

    const footerContent = (
        <div
            className="
            flex
            flex-col
            gap-4
            mt-3
        "
        >
            <hr />
            <Button
                outline
                label="Login with google"
                icon={FcGoogle}
                onClick={() => { }}
            />
            <Button
                outline
                label="Login with github"
                icon={AiFillGithub}
                onClick={() => { }}
            />
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModel.isOpen}
            title='Login'
            actionLabel='Continue'
            onClose={() => {
                loginModel.onClose()
            }}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModel