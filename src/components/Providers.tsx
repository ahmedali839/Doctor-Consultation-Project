'use client'
import { useAuthStore } from "@/store/authStore";
import React, { useEffect } from "react";



export function Providers({children} : {children:React.ReactNode}) {
    const {fetchProfile,token} =  useAuthStore();
    useEffect(() => {
        if(token){
            fetchProfile();
        }
    },[token,fetchProfile]);

    return <>{children}</>
}