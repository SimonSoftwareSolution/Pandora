import * as React from "react"
import Grid from '@material-ui/core/Grid';
import anfahrt from './../images/anfahrt.png'
import {faqStyle, backgroundColor, centeredItems, modalImage} from '../styles/styles';

  const AnfahrtBody = (props) => {
      return(
    <Grid container spacing={3} style={backgroundColor}>
        <Grid item xs={1} style={centeredItems}/>
      <Grid item xs={10} style={faqStyle} onClick={() => props.handleClose()}>
        <img src={anfahrt} alt="Logo" style={modalImage} />
        <p style={faqStyle}>
          Liebe Leute, wegen der Anfahrt: die Zielhaltestelle selbst heißt Brodersdorf und wird von der Buslinie 14 von Kiel aus bedient. Von dort aus lauft ihr noch ca. 15-20 Min. bis zum Gelände. Falls ihr schon gebucht habt, wären Laboe/ Röbsdorf, Probsteierhagen etc. auch nicht ganz falsch. 
          Wenn der Aufbau gut läuft, (und das tut er, wenn ein paar helfende Hände schon früher anreisen und mit anpacken 😉)  findet sich bestimmt ein freundliche*r Fahrer*in, der/die Neuankömmlinge abholt. 
          Wir versuchen schnellstmöglich eine Website auf die Beine zu stellen, wo der Fußweg beschrieben ist. 
          Außerdem, besonders, wenn man gerne abgeholt werden möchte - bietet es sich an, in Fahrgemeinschaften zu kommen, auch dafür wird es über die Website nochmal ein Portal geben, wo ihr eure Reisezeit eintragen könnt (falls ihr wollt). Und Autofahrer ihre freien Plätze anbieten dürfen.
          Auf ein gutes Gelingen und mit ganz viel Vorfreude auf unser Abenteuer "Pandora"! Liebe Grüße 🍀
        </p>
      </Grid>
      <Grid item xs={1} style={centeredItems}/>

    </Grid>
      )}

  export default AnfahrtBody