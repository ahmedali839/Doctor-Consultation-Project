"use client"

import { userAuthStore } from '@/store/authStore'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = userAuthStore((s) => s.isAuthenticated)

  useEffect(() => {

    if (!isAuthenticated) {
      redirect("/login/patient")
    }

  }, [isAuthenticated])


  return (
    <div className='min-h-screen flex bg-gray-50 flex-col'>
      <header className='bg-white px-6 py-4 border-b'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-2xl font-bold text-blue-500'>
            MediCare +
          </div>
        </div>
      </header>
      <main className='flex-1 flex items-center justify-center p-4'>
        {children}
      </main>

    </div>
  )
}

export default layout