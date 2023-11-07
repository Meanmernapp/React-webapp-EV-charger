import { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import Routing from "./routes/Routing";
import jwt from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "./services/authetication/AutheticationSlice";
import { useNavigate, useParams } from "react-router-dom";
import cryptoJs from "crypto-js";
import FullPageLoader from "./utils/FullPageLoader";
import { setSidebar } from "./services/ui/UISlice";
import { GetUserProfile } from "./services/authetication/AutheticationApi";

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pageName } = useParams();
  const tokenDecrpt = sessionStorage.getItem("token");
  const bytes = cryptoJs.AES.decrypt(
    tokenDecrpt || "no",
    import.meta.env.VITE_SECURE_KEY
  );
  const token = bytes.toString(cryptoJs.enc.Utf8);
  // use selcetor
  const { user } = useSelector((state) => state.AuthenticationSlice);
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
          toast.error("Token is Expired");
          dispatch(logOut());
        }
      } catch (error) {
        // Handle any decoding errors here, if necessary
        console.error("Error decoding token:", error);
      }
    };
    checkTokenValidity();
  }, [token, dispatch]);

  // this useEffect to redirect auth user to page
  useEffect(() => {
    if (token && location.pathname == "/" && user) {
      switch (user.role) {
        case "user":
        case "operator":
          navigate("/map-view");
          break;
        case "driver":
          navigate("/drivers")
          break;
        default:
          navigate("/");
      }
    }
  }, [user]);



  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      if (document.getElementById("overlay")) {
        document.getElementById("overlay").style.display = "none";
      }
    } else {
      if (document.getElementById("overlay")) {
        document.getElementById("overlay").style.display = "none";
      }
    }
  }, [loading]);


  useEffect(()=>{
    console.log("djfkljf")
    if(token){
      dispatch(GetUserProfile())
    }

  },[])

  return (
    <>
      <FullPageLoader />
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        transition={Slide}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
