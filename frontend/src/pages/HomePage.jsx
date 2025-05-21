import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getOutgoingFriendReqs, getRecommendedUsers, getUserFriends } from '../lib/api'

const HomePage = () => {
  const queryClient = useQueryClient()
  const [outgoingRequestsIds, setOutgoingRequestsIds] = useState([])

  const {data: friends = [], isLoading:loadingFriends} = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends
  })

    const {data:recommendedUsers=[] ,isLoading: loadingUsers} = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers
  })

  const {data: outgoingFriendReqs} = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs
  })
  
  
  return (
    <div>HomePage</div>
  )
}
 
export default HomePage
