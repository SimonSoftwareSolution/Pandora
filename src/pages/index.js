import * as React from "react"
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import {backgroundColor, headline, centeredItems, root, imgBorderRadius} from '../styles/styles';
import FaqBody from './faqBody';
import AnfahrtBody from './anfahrtBody';

import thumpnail from './../images/thumbnail.jpg'



// markup
const IndexPage = () => {
    const [faqOpen, setFAQOpen] = React.useState(false);
    const [anfahrtOpen, setAnfahrtOpen] = React.useState(false);

    const handlefaqOpen = () => {
      setFAQOpen(true);
    };
    const handlefaqClose = () => {
      setFAQOpen(false);
    };

    const handleAnfahrtOpen = () => {
      setAnfahrtOpen(true);
    };
    const handleAnfahrtClose = () => {
      setAnfahrtOpen(false);
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
        <img src={thumpnail} alt="Logo" style={imgBorderRadius}/>
      </Grid>

      <Grid item xs={12} style={centeredItems} onClick={() => handlefaqOpen()}>
        <p style={root}>☼ Frequently asked questions</p>
      </Grid>

      <Grid item xs={1} style={centeredItems}/>
      <Grid item xs={5} style={centeredItems}>
      </Grid>
      <Grid item xs={5} style={centeredItems} onClick={() => handleAnfahrtOpen()}>
        <p style={root}>
            ☼<br/>
         Location<br/>
           und  <br/>  
         Anfahrt 
        </p>
      </Grid>
      <Grid item xs={1} style={centeredItems}/>
      
  
      <Grid item xs={5} style={centeredItems}/>
      <Grid item xs={3} style={centeredItems}>
        <p> ☼<br/>Fahr<br/>gemein<br/>schaf<br/>ten
        </p>
      </Grid>
      <Grid item xs={4} style={centeredItems}/>

      <Grid item xs={2} style={centeredItems}/>
      <Grid item xs={4} style={centeredItems}>
        <p style={root}> ☼<br/>Dinge auf unserer To-Do-Liste
        </p>
      </Grid>
      <Grid item xs={6} style={centeredItems}/>

      <Modal
        open={faqOpen}
        onClose={handlefaqClose}
      >
        <FaqBody handleClose={() => handlefaqClose()}/>
      </Modal>  
      <Modal
        open={anfahrtOpen}
        onClose={() => handleAnfahrtClose()}
      >
        <AnfahrtBody handleClose={() => handleAnfahrtClose()}/>
      </Modal>


      </Grid>

  )
}

export default IndexPage
