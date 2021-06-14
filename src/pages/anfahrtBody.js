import * as React from "react"
import Grid from '@material-ui/core/Grid';
import anfahrt from './../images/anfahrt.png'
import {faqStyle, backgroundColor, centeredItems} from '../styles/styles';

  const AnfahrtBody = () => {
      return(
    <Grid container spacing={3} style={backgroundColor}>
        <Grid item xs={3} style={centeredItems}/>
      <Grid item xs={6} style={faqStyle}>
        <img src={anfahrt} alt="Logo"/>
      </Grid>
      <Grid item xs={3} style={centeredItems}/>
    </Grid>
      )}

  export default AnfahrtBody