import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'
import { useQuery } from '@tanstack/react-query'
import { getStreamToken } from '../lib/api'

import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window
} from "stream-chat-react"

const ChatPage = () => {
  const {id:targetUserId} = useParams()
  const [chatClient, setChatClient] = useState(null)
  const [channel,setChannel] = useState(null)
  const [loading, setLoading] = useState(true)

  const {authUser} = useAuthUser()

  const {data} = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser // only fetch if authUser is available
  })


  return (
    <div>

    </div>
  )
}

export default ChatPage
