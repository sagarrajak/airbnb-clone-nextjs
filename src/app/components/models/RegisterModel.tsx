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
import { toast } from 'react-hot-toast'
import Button from '../Button'

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
        axios.post('/api/register', data).then((res) => {
          toast.success("User added successfully!");
        })
        .catch((err) => {
            toast.error(err.response.data.message || 'Something went wrong!')
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
                required
            />
            <Input
                id='name'
                label='Name'
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
                type='password'
                errors={errors}
                required
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
          label="Continue with google"
          icon={FcGoogle}
          onClick={() => {}}
        />
        <Button
          outline
          label="Continue with github"
          icon={AiFillGithub}
          onClick={() => {}}
        />
        <div
          className="
                    flex
                    flex-row
                    gap-3
                    justify-center
                "
        >
          <div>Already have an account ?</div>
          <div
            className="
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                    "
            onClick={registerModel.onClose}
          >
            Sign in
          </div>
        </div>
      </div>
    );

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
            footer={footerContent}
        />
    )
}

export default RegisterModel