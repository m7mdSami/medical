import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../Components/Sidebar";
import './index.scss'

class Layout extends React.Component {
    constructor(props: Record<string, any>){
        super(props);
    }
       render(){
         return(
           <main className="main-layout">
             <Grid className="main-layout__container" container spacing={2} columns={12}>
                <Grid className="main-layout__sidebar" item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    ddd
                </Grid>
            </Grid>
           </main>
         )
       }
   
}

export default Layout