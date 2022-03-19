import React from "react";
import TopBar from "./components/topbar";

import { Grid, CardContent, Card,Stack } from "@mui/material";

const styles = {
    card: {
      position: 'relative',
      width: '250px',
      height: "270px",
      borderRadius:"50px",
      border: `2px solid #aba38e  `,
    },
 
  }



const Item = (prop) => {
    console.log(prop)
    return <Card style={styles.card}>{prop.children}</Card>
}



function Dashboard() {
  return (
    <>
      <TopBar />
      <Stack direction="row" >
        <Grid padding={5} container rowSpacing={5}>
        {[...Array(6).keys()].map((num)=>(
            <Grid item xs={4}>
            <Item>{num}</Item>
            </Grid>
        ))}        
        </Grid>
        <div  style={{width: '60%',height:'700px', backgroundColor:'#aba38e'}} ></div>
      </Stack>
    </>
  );
}

export default Dashboard;
