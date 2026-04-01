'use client'

import { useEffect } from "react"

export default function ProjectName(){

  useEffect(()=>{
    document.documentElement.dataset.projectName = 'my-next'
  },[])

  return null
}