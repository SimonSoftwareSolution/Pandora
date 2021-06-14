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
    fontFamily: 'Chalkduster',
    fontSize : 30
  }
  
  const backgroundColor = {
    // backgroundColor : '#90e0ef'
    fontFamily: 'arial'
  }
  
  const faqStyle = {
    ...centeredItems,
    fontSize : 14,
    marginTop : '100px',
    marginBottom : '100px',
    maxWidth : '800px',  
    backgroundColor : '#FFFFFF',
    height: '100%',
    width : '100%',
    maxHeight: '100vh',
    overflowY: 'auto'

  }

  const modalImage = {
    maxWidth: '100%',
    height: 'auto'
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

  export {pageStyles, img, root, backgroundColor, faqStyle, centeredItems, headline, imgBorderRadius, modalImage}