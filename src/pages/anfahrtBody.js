import * as React from "react"
import Grid from '@material-ui/core/Grid';
import anfahrt from './../images/anfahrt.png'

function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: 'absolute',
      maxWidth: 1200,
      backgroundColor : '#FFFFFF',
      border: '2px solid #000',
      padding: (2, 4, 3),
    };
  }
  

  const AnfahrtBody = () => {
      return(
    <Grid container spacing={3} style={getModalStyle()}>
      <Grid item xs={12}>
        <img src={anfahrt} alt="Logo"/>
      </Grid>
  
    </Grid>
      )}

  export default AnfahrtBody