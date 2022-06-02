import { Grid } from "@mui/material";
import React from "react";

class AboutUs extends React.Component {
    constructor(props: Record<string, any>){
        super(props);
    }
       render(){
         return(
           <section className="about-us">
             <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    gg
                </Grid>
                <Grid item xs={8}>
                    ddd
                </Grid>
            </Grid>
           </section>
         )
       }
   
}

export default AboutUs