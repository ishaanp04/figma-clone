import { ClientSideSuspense } from '@liveblocks/react'
import React from 'react'
import { CommentsOverlay } from './CommentsOverlay'

export const Comments = () => {
  return (
    <ClientSideSuspense fallback={null}>
        <CommentsOverlay />
        {/* <div className='bg-pink-500 w-5'>TESTING</div> */}
    </ClientSideSuspense>
  )
}

