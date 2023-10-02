'use client'
import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { MenuItem } from '../MenuItem'
import useRegisterModel from '@/app/hooks/useRegisterModel'
import useLoginModel from '@/app/hooks/useLoginModel'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { HydrationSafeUser } from '@/app/actions/getCurrentUsers'
export interface UserMenuProps {
  currentUser?: HydrationSafeUser | null
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();

  const toggleMenuOpen = useCallback(() => {
    setOpen((state) => !state);
  }, [setOpen]);

  return (
    <div className='relative'>
      <div className="
            flex
            flex-row8
            items-center
            gap-3
        ">
        <div
          onClick={() => { }}
          className="
              hidden
              md:block
              text-sm
              font-semibold
              py-3
              px-4
              rounded-full
              hover:bg-neutral-100
              transition
              cursor-pointer
            "
        >
          Airbnb your home
        </div>
        <div onClick={toggleMenuOpen}
          className="
              p-4
              md:py-1
              md:px-2
              border-[1px]
              border-neutral-200
              flex
              flex-row
              items-center
              gap-3
              rounded-full
              cursor-pointer
              hover:shadow-md
              transition
            "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {
        isOpen && (
          <div
            className="
              absolute
              rounded-xl
              shadow-md
              w-[40vw]
              md:w-3/4
              bg-white
              overflow-hidden
              right-0
              top-12
              text-sm
            "
          >
            <div className="
              flex 
              flex-col
              cursor-pointer
            ">
              <>
                {
                  !currentUser ? (
                    <>
                      <MenuItem
                        onClick={() => {
                          loginModel.onOpen();
                          toggleMenuOpen()
                        }}
                        label='Log In'
                      />
                      <MenuItem
                        onClick={() => {
                          registerModel.onOpen();
                          toggleMenuOpen()
                        }}
                        label='Sign up'
                      />
                    </>
                  ) : (
                    <>
                      <MenuItem
                        onClick={() => {
                        }}
                        label='My Trips'
                      />
                      <MenuItem
                        onClick={() => {
                        }}
                        label='My favourites'
                      />
                      <MenuItem
                        onClick={() => {
                        }}
                        label='My reservations'
                      />
                      <MenuItem
                        onClick={() => {
                        }}
                        label='My properties'
                      />
                      <MenuItem
                        onClick={() => {
                        }}
                        label='Airbnb my home'
                      />
                      <hr />
                      <MenuItem
                        onClick={() => {
                          signOut()
                        }}
                        label='Logout'
                      />
                    </>
                  )
                }

              </>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserMenu