import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useAuthUser from '../hooks/useAuthUser'
import { useQuery } from '@tanstack/react-query'
import { getStreamToken } from '../lib/api'

import {

} from "@stream-io/video-react-sdk"
import "@stream-io/video-react-sdk/dist/css/styles.css"

const CallPage = () => {
  const {id: callId} = useParams()

  const [client,setClient] = useState(null)
  const [call, setCall] = useState(null)
  const [isConnecting,setIsConnecting] = useState(true)

  const {authUser, isLoading} = useAuthUser()
  
  const {data: tokenData} = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser // only fetch if authUser is available
  })

  useEffect(() => {
    const initCall = async () => {
      if(!tokenData || !authUser || !callId) return;

      try {
        console.log("Initializing call client...")

      } catch(error) {
        console.log("Error in initCall",error)
      }
    }

    initCall()
  }, [])


  return (
    <div>

    </div>
  )
}

export default CallPage
