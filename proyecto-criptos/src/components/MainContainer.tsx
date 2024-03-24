'use client'
import React from 'react'

type Prop = {
    className: string,
    children: React.ReactNode
}

export default function MainContainer({children, className}:Prop) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}
