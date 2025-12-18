'use client'
import { userAuthStore } from "@/store/authStore";
import React, { useEffect } from "react";



export function Providers({children} : {children:React.ReactNode}) {
    const {fetchProfile,token} =  userAuthStore();
    useEffect(() => {
        if(token){
            fetchProfile();
        }
    },[token,fetchProfile]);

    return <>{children}</>
}