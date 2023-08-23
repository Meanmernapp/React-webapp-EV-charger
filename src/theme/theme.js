import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F9F9F9",
      dark: "#D7D7DB",
      light: "#A2CBF4",
    },
    secondary: {
      main: "#74993F",
      dark: "#146F62",
      light: "#A2CBF4",
    },
    error: {
      main: "#FF553E", 
    },
    background:{
       paper:"#E6E6E6",
       default:"#E6E6E6"
    },
    // Add or update the following lines to modify the text field colors
    text: {
      primary: "#000000", 
      secondary: "#333", 
    },
    // Optionally, you can also update the border color for the outlined text fields
    action: {
      active: "#AEAEB7", // Change this to your desired border color when focused
    },
  },
  typography: {
    // Override the default font family for all elements
    fontFamily: "IBM Plex Sans",

    // Override specific elements' typography
    h1: {
      fontSize: "2.625rem", // Change this to your desired font size
      fontWeight: 600, // Change this to your desired font weight
    },

    h2: {
      fontSize: "2rem", 
      fontWeight: 600, 
    },
    h3:{
      fontSize: "1.5rem", 
      fontWeight: 600, 
    },
    h4:{
      fontSize: "1rem", 
      fontWeight: 600, 
    },
    h5: {
      fontSize: "0.875rem", 
      fontWeight: 600, 
    },
    body1: {
      fontSize: "0.875rem", 
      fontWeight: 400, 
    },
    body2:{
      fontSize:"0.75rem",
      fontWeight:400,
      color:"#8D8D8D"
    }
  },

  components: {
    // overrides any componet you want here
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AEAEB7",
          },
         
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:"#AEAEB7",
          color:"#000",

          '&:hover': {
            backgroundColor: 'primary.main', // Change this to your desired background color on hover
            color: '#000000', // Change this to your desired text color on hover
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 48,
          height: 24,
          padding: 0,
          display: 'flex',
        },
        switchBase: {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(20px)',
            color:'#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: '#74993F',
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#52d869',
            border: '6px solid #fff',
          },
        },
        thumb: {
          width: 20,
          height: 20,
          boxShadow: 'none',
        },
        track: {
          borderRadius: 24 / 2,
          opacity: 1,
          backgroundColor: '#707070',
        },
        
      },
    },

  },
});

export default theme;

