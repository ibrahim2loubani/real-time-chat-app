import Button from '@/components/ui/Button'
import React, { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='flex min-h-screen justify-center items-center w-full'>
      <Button>Submit</Button>
    </div>
  )
}

export default page
