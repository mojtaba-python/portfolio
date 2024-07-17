import { createTheme } from "@mui/material"


export const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily:"Vazir",
        fontSize:14,
        h1:{

        },
        caption:{

        },
        button:{
            fontSize:14,
        },
        

    },
    palette:{
        mode:'light',
        primary:{
          main:"#387ADF", //blue
        },
        secondary:{
            main:"#333A73",  
        },
        error:{
            main:"#FBA834", //orang
            dark: "#0aa8f7",
        },
        success:{
            main:'#1d8e01',
        },
        info:{
            main:"#0aa8f7",
        },
        common:{
            main:"#0aa8f7",
        },
    },
});


export const darkTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily:"Vazir",
        fontSize:14,
        h1:{

        },
        caption:{

        },
        button:{
            fontSize:14,
        },
        

    },
    palette:{
        mode:'dark',
        primary:{
          main:"#387ADF", //blue
        },
        secondary:{
            main:"#333A73",  
        },
        error:{
            main:"#FBA834", //orang
            dark: "#0aa8f7",
        },
        success:{
            main:'#1d8e01',
        },
        info:{
            main:"#0aa8f7",
        },
        common:{
            main:"#0aa8f7",
        },
    },
});