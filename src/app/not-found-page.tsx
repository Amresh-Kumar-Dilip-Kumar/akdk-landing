import React from 'react'

function NotFoundPage() {
    return (
        <div className='min-h-[50vh] flex flex-col items-center justify-center text-center mt-12'>
            <h1 className='text-6xl font-bold mb-4'>404</h1>
            <p className='text-xl mb-8'>Page Not Found</p>
            <a href="/" className='text-blue-500 hover:underline'>Go to Home</a>
        </div>
    )
}

export default NotFoundPage