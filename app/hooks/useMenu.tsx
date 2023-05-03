"use client"
import {Menu } from '@/DataType/DataType'
import React, { useCallback, useEffect, useState } from 'react'

const useMenu = (href:string, menu:Menu[]) => {
    
    console.log("href ", href)
    const [currentTab, setCurrentTab] = useState<Menu>({id: 0,
      title: "Loading",
      url: "Loading",
})
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
    ( async () => {setLoading(true)
    let i =  menu.findIndex((item) => item.url == href)
    if(i > -1) {
        const newobj =  menu[i];
        setCurrentTab(newobj);
        setLoading(false);
        return;
    }
    setError(true);
    setLoading(false)
    
    })()
    },[href, menu])
    
  return {currentTab, loading, error}
}

export default useMenu