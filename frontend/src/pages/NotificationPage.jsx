import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { acceptFriendRequest, getFriendRequests } from '../lib/api'

const NotificationPage = () => {
  const queryClient = useQueryClient()

  const {data: friendRequests, isLoading} = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests
  })

  const {mutate: acceptRequestMutation, isPending} = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["friendRequests"]}) // to refetch
      queryClient.invalidateQueries({queryKey: ["friends"]}) // to refetch
    }
   })

   const incomingRequests = friendRequests?.incomingReqs || []
   const acceptedRequests = friendRequests?.acceptedReqs || []
  
  return (
    <div className='p-4 sm:p-6 lg:p-8 '>
      <div className='container mx-auto max-w-4xl space-y-8'>
        <h1 className='text-2xl sm:text-3xl font-bold tracking-tight mb-6'>Notifications</h1>

        {isLoading ? (
          <div className='flex justify-center py-12'>
            <span className='loading loading-spinner loading-lg' />
          </div>
        ) : (
          <>
            {incomingRequests.length > 0 && (
              <section className='space-y-4'>

              </section>
            )}
          </>
        )}
      </div>

    </div>
  )
}

export default NotificationPage
