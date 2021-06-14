import * as React from "react"
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import {backgroundColor, headline, centeredItems, root, imgBorderRadius} from '../styles/styles';
import FaqBody from './faqBody';
import AnfahrtBody from './anfahrtBody';
import PacklisteBody from './packlisteBody';

import thumpnail from './../images/thumbnail.jpg'



// markup
const IndexPage = () => {
    const [faqOpen, setFAQOpen] = React.useState(false);
    const [anfahrtOpen, setAnfahrtOpen] = React.useState(false);
    const [packlisteOpen, setPacklisteOpen] = React.useState(false);

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

    const handlePacklisteOpen = () => {
      setPacklisteOpen(true);
    };
    const handlePacklisteClose = () => {
      setPacklisteOpen(false);
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
      
      <Grid item xs={2} style={centeredItems}/>
      <Grid item xs={4} style={centeredItems} onClick={() => handlePacklisteOpen()}>
        <p style={root}> ☼<br/>Packliste
        </p>
      </Grid>
      <Grid item xs={6} style={centeredItems}/>
  
      <Grid item xs={5} style={centeredItems}/>
      <Grid item xs={3} style={centeredItems}>
        <a href='https://docs.google.com/spreadsheets/d/1Mhqwb4y6DHsK6bwsYZF0l2rPQ-wbOZMow2vKAd4jLdk/edit#gid=0'>
        
        <p> ☼<br/>Fahr<br/>gemein<br/>schaf<br/>ten
        </p>
        </a>
      </Grid>
      <Grid item xs={4} style={centeredItems}/>


      <Grid item xs={2} style={centeredItems}/>
      <Grid item xs={4} style={centeredItems}>
      <a href='https://docs.google.com/document/d/1pdZfFrwHlEY0HFjXXH4PhQ9YgXc3aXsJXJixdqID6s0/edit?usp=sharing'> 
        <p style={root}> ☼<br/>Dinge auf unserer To-Do-Liste
        </p>
      </a>
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
      <Modal
        open={packlisteOpen}
        onClose={() => handlePacklisteClose()}
      >
        <PacklisteBody handleClose={() => handlePacklisteClose()}/>
      </Modal>


      </Grid>

  )
}

export default IndexPage
