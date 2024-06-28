import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import moment from "moment";

export default function Current({ data }) {
  const date = new Date();
  console.log("date", date);

  return (
    <div className="weather-parent-container ">
     <div className="position-end">
        {data?.name}
      </div>
      <div style={{ flex: 1 }}></div> 
        <Grid container spacing={0} sx={{marginTop: 'auto'}}>
          <Grid item xs={8}>
            <div>{moment(date).format("hh:mm:ss")}</div>
            <div>{moment(date).format("dddd Do YYYY")}</div>
          </Grid>
          <Grid item xs={4}>
            {data.main.temp} °C
          </Grid>
        </Grid>
    </div>
  );
}
