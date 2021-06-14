import * as React from "react"
import Grid from '@material-ui/core/Grid';
import {faqStyle, backgroundColor, centeredItems} from '../styles/styles';


const PacklisteBody = (props) => {
    return(
    <Grid container spacing={3} style={backgroundColor}>
        <Grid item xs={12} style={centeredItems} />
        <Grid item xs={1} style={centeredItems} />
        <Grid item xs={10} onClick={() => props.handleClose()}>
        <p style={faqStyle}>
        <br/>
        <br/>
        <br/>
        1. Zelt, Schlafsack, Isomatte (Wäre superklassetoll, wenn man sich zelte teit oder sie nicht riesig sind Platz wollen wir zum Tanzen und weniger zum Campen nutzen) <br/> 
        2. SCHNELLTESTERGEBNIS und IMPFPASS+Kopie  für Geimpfte <br/>
        3.Picknickdecken tücher o.ä <br/>
        4. Geschirr <br/>
        5. BIERBECHER (Es gibt eine Zapfanlage und wir wollen wenig Müll also bringt euch n schönen Becher mit, bitte KEIN GLAS!) <br/>
        6.Lichter(-Ketten) am Besten Batteriebetrieben <br/>
        7. Essen (es gibt eine Grundversorgung zum Selbstkostenpreis aber die wird nicht für alles reichen) 
        <br/>
        8. OP/FFP MASKEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! OHNE MASKE KEINE PARTY!!!
        <br/>
        9. Fahrrad, falls möglich für strandausflüge 
        <br/>
        10. Hängematten
        <br/>
        11, MÜCKENSPRAY (trust me ich war letzte Woche da) 
        <br/>
        12. Kleingeld für die bar, es gibt zwar wechselgeld aber nicht unendlich viel) 
        <br/>
        13.. Taschenaschenbecher usw. Es wird auch einige auf dem Gelände geben aber besser zu viel als zu wenig. Gleiches gilt für Müll.
        <br/>
        13.. Taschenaschenbecher usw. Es wird auch einige auf dem Gelände geben aber besser zu viel als zu wenig. Gleiches gilt für Müll. Nehmt euch ne Tüte oder so mit und lasst das Gelände bitte so schön wie es ist
        <br/>
        Bald geht es los meine Freunde!!!! ❤️❤️❤️
        <br/>
        <br/>
        ☼
        <br/>
        <br/>
        ☼
        <br/>
        <br/>
        
        ☼
        <br/>
        <br/>
        ☼
        <br/>
        <br/>
        </p>
      </Grid>
      <Grid item xs={1} style={centeredItems}/>
    </Grid>
    )}

  export default PacklisteBody