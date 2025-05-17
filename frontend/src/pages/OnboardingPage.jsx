import React from 'react'
import useAuthUser from '../hooks/useAuthUser'

const OnboardingPage = () => {
  const {isLoading, authUser} = useAuthUser()

  return (
    <div>OnboardingPage</div>
  )
}

export default OnboardingPage
