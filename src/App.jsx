import { useEffect, useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify'
import Routing from './routes/Routing'
import jwt from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from './services/authetication/AutheticationSlice'
  import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token")
  // use selcetor
  const { user } = useSelector(state => state.AuthenticatioauthennSlice)
  //this useEffect will  monitor the token validation
  useEffect(() => {
    const checkTokenValidity = () => {
      if (!token) {
        // Token not available, no need to proceed further
        return;
      }
      try {
        const tokeninfo = jwt(token);
        const expireDate = tokeninfo?.exp * 1000;
        const currentDate = Date.now();

        if (expireDate && currentDate > expireDate) {
          toast.error('Token is Expired');
          dispatch(logOut());

        }
      } catch (error) {
        // Handle any decoding errors here, if necessary
        console.error('Error decoding token:', error);
      }
    };
    checkTokenValidity();
  }, [token, dispatch]);

  // this useEffect to redirect auth user to page
  useEffect(() => {
    if (token && location.pathname == "/" && user) {
      navigate('/map-view')
    }
  }, [])

 

  return (
    <>

      <Routing />
      <ToastContainer position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        transition={Slide}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  )
}

export default App
