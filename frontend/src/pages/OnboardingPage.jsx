import React, { useState } from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { completeOnboarding } from '../lib/api'

const OnboardingPage = () => {

  const {authUser} = useAuthUser()
  const queryClient = useQueryClient()

  const [formState, setFormState] = useState({
    fullName: authUser.fullName || "",
    bio: authUser.bio || "",
    nativeLanguage: authUser.nativeLanguage || "",
    learningLanguage: authUser.learningLanguage || "",
    location: authUser.location || "",
    profilePic: authUser.profilePic || "",
  })

  const {mutate: onboardingMutation, isPending} =useMutation({
    mutationFn: completeOnboarding, // api call to complete onboarding -> POST
    onSuccess: () => {
      toast.success("Profile onboarded successfully")
      queryClient.invalidateQueries({queryKey: ["authUser"]}) // to refetch
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState)
  }

  return (
    <div className=''>

    </div>
  )
}

export default OnboardingPage
