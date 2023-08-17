"use client"

import Categories from '@/components/Categories'
import Grid from '@/components/Grid'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoryPage = () => {
    const path=usePathname()
  return (
    <div>
        <Header/>
        <Categories/>
        {path}
        <Grid/>
    </div>
  )
}

export default CategoryPage