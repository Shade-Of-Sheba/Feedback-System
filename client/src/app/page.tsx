'use client';


import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the welcome page when the home page is accessed
    router.push('/welcome')
  }, [router])

  return null // This page doesn't need to render anything directly
}
