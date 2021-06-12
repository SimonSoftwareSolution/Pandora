import * as React from "react"
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import thumpnail from './../images/thumbnail.jpg'
import kopf from './../images/kopf.jpg'


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor : '9bf6ff'
}

const img = {
  maxWidth: "60%",
  height: "auto",
 
}

const imgBorderRadius = {
  ...img,
  borderRadius: '50%',
  maxWidth : '400px',
}

const root = {
  fontFamily: 'Futura'
}

const backgroundColor = {
  // backgroundColor : '#90e0ef'
  fontFamily: 'arial'
}


const centeredItems = {
  ...root,
  textAlign: 'center',
}

const headline = {
  textAlign: 'center',
  fontWeight: 300,
  fontSize: 82,
}

// markup
const IndexPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

  return (
   
     
      <Grid container spacing={3} style={backgroundColor}>
      <title>Pandora Festival</title>

      <Grid item xs={12} style={centeredItems}>
        <h1 style={headline}>Pandora</h1>
        {/* <img src={kopf} alt="Logo" style={img} /> */}
      </Grid>

      <Grid item xs={12} style={centeredItems}>
        <p> ღ꧁ღ╭⊱ꕥ wir freuen uns auf euch ꕥ⊱╮ღ꧂ღ </p>
        <img src={thumpnail} alt="Logo" style={imgBorderRadius} onClick={() => handleOpen()}/>
      </Grid>

      <Grid item xs={12} style={centeredItems}>
        <p style={root}>☼ Frequently asked questions</p>
      </Grid>


      <Grid item xs={6} style={centeredItems}>
       
      </Grid>
      <Grid item xs={6} style={centeredItems}>
        <p style={root}>
            ☼<br/>
         Location<br/>
           und  <br/>  
         Anfahrt 
        </p>
      </Grid>
      
      <Grid item xs={8} style={centeredItems}/>
      <Grid item xs={4} style={centeredItems}>
        <p> ☼<br/>Fahr<br/>gemein<br/>schaf<br/>ten
        </p>
      </Grid>

      <Grid item xs={2} style={centeredItems}/>
      <Grid item xs={8} style={centeredItems}>
        <p style={root}> ☼<br/>Dinge auf unserer To-Do-Liste
        </p>
      </Grid>
      <Grid item xs={3} style={centeredItems}/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        centered
      >
        {body}
      </Modal>  


      </Grid>

  )
}

const modalStyle = {
  position: 'absolute',
  width: 400,
  backgroundColor: '#023e8a',
  opacity: 0.8,
  top: '40%',
  left: '50%',
  marginTop: '-50px',
  marginLeft: '-50px'
}

const body = (
  <Grid container spacing={3} style={modalStyle}>
    <Grid item xs={12}>
      <h1>Hey Festivalbesucher</h1>
      <p>
        Schön bla bla bla bla
      </p>
    </Grid>

  </Grid>
);

export default IndexPage
