import { Navigate, Route, Routes } from 'react-router-dom'
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
import PageLoader from './components/PageLoader.jsx'

const App = () => {
  //tankstack query
  //create, delete , ect -> use mutation
  const {data: authData, isLoading, error} = useQuery({
    queryKey:["authUser"],  // unique key -> to know when to refetch
    queryFn: async() => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false // only fetch once -> auth check
  })

const authUser = authData?.user // user from backend response

  if(isLoading) return <PageLoader />

  return (
    <div className='h-screen' data-theme="night">
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ?<SignUpPage /> : <Navigate to="/" />} />
        <Route path='/login' element={!authUser ?  <LoginPage /> : <Navigate to="/" />} />
        <Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to="/login" />} />
        <Route path='/call' element={authUser ? <CallPage /> : <Navigate to="/login" />} />
        <Route path='/chat' element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path='/onboarding' element={authUser ? <OnboardingPage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
