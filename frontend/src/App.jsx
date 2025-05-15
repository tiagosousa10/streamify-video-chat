import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NotificationPage from './pages/NotificationPage.jsx'
import CallPage from './pages/CallPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'
import { Toaster } from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from './lib/axios.js'

const App = () => {
  //tankstack query
  //create, delete , ect -> use mutation
  const {data, isLoading, error} = useQuery({queryKey:["todos"], 

    queryFn: async() => {

      const res = await axiosInstance.get("http://localhost:5001/api/auth/me");
      return res.data;

    }
  })



  return (
    <div className='h-screen' data-theme="night">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/call' element={<CallPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
