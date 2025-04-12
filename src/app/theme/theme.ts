'use client'
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      fill: true;
      outline:true;
      Ghost:true;
      pure:true;
    }
  }
const theme = createTheme({
    components:{
        MuiButton:{
                    variants:[
                        {props:{variant:"fill"},
                    style:{
                    backgroundColor:"#105FAE",
                    borderRadius:"12px",
                    gap:"8px",
                    fontSize:"14px" ,
                    color:"#FCFCFD"
                    },
                },
                {props:{variant:"outline"},
                    style:{
                        borderRadius:"12px",
                        backgroundColor:"#FCFCFD",
                        border:"solid 0.5px #105FAE",
                        gap:"8px",
                        color:"#1C68B7",
                        "&:hover":{
                            backgroundColor:"#EAF3FE"
                        },
                        "&:active":{
                         boxShadow:"0px 1.5px 2px 0px #0000001A",
                        },
                        "&.Mui-disabled":{
                            backgroundColor:"#EAF3FE",
                            color:"#B9BBC6"
                        }
                    },
                },
                {props:{variant:"Ghost"},
                style:{
                backgroundColor:"#EAF3FE",
                borderRadius:"12px",
                gap:"8px",
                color:"#1C68B7",
                "&:hover":{
                backgroundColor:"#DCEBFF"
            },"&:active":{
                 backgroundColor:"#DCEBFF",
             boxShadow:"0px 1.5px 2px 0px #0000001A",
            }, "&.Mui-disabled":{
                backgroundColor:"#EAF3FE",
                color:"#B9BBC6"
            },
                },
                
            
           },{props:{variant:"pure"},
           style:{
           backgroundColor:"#FCFCFD00",
           borderRadius:"12px",
           gap:"8px",
           color:"#1C68B7",
           "&:hover":{
            backgroundColor:"#EAF3FE"
        },"&:active":{
            backgroundColor:"#EAF3FE",
        boxShadow:"0px 1.5px 2px 0px #0000001A",
       }, "&.Mui-disabled":{
        backgroundColor:"#EAF3FE",
        color:"#B9BBC6"
    }
           },
       }  
                ],
            },
        },
    },
);
export default theme;