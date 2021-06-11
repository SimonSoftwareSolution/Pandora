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
  borderRadius: '50%'
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const backgroundColor = {
  backgroundColor : '#90e0ef'
}


const centeredItems = {
  textAlign: 'center',
}

const headline = {
  textAlign: 'center',
  fontWeight: 300,
  fontSize: 24,
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
        <img src={kopf} alt="Logo" style={img} />
      </Grid>

      {/* <Grid item xs={3} style={centeredItems}/>
      <Grid item xs={6} style={centeredItems}>
          <img src={thumpnail} alt="Logo" style={imgBorderRadius} />
        </Grid>
      <Grid item xs={3}/>
       
        */}

      <Grid item xs={6} style={centeredItems}>
        <h1>Packliste</h1>
        <img src={thumpnail} alt="Logo" style={imgBorderRadius} />
      </Grid>
      <Grid item xs={6} style={centeredItems}>
        <h1>Anfahrt</h1>
        <img src={thumpnail} alt="Logo" style={imgBorderRadius} onClick={() => handleOpen()}/>
      </Grid>

      <Grid item xs={6} style={centeredItems}>
        <h1>FAQ</h1>
        <img src={thumpnail} alt="Logo" style={imgBorderRadius} />
        </Grid>
      <Grid item xs={6} style={centeredItems}>
        <h1>Pioniere</h1>
        <img src={thumpnail} alt="Logo" style={imgBorderRadius} />
      </Grid>
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
