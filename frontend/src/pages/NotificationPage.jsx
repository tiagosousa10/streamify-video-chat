import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { getFriendRequests } from '../lib/api'

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
  
  return (
    <div>

    </div>
  )
}

export default NotificationPage
