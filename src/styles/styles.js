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

  const centeredItems = {
    ...root,
    textAlign: 'center',
  }
  
  const faqStyle = {
    ...centeredItems,
    fontSize : 16,
    marginTop : '100px',
    marginBottom : '300px',
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
  
  
  
  
  const headline = {
    textAlign: 'center',
    fontWeight: 300,
    fontSize: 82,
  }

  export {pageStyles, img, root, backgroundColor, faqStyle, centeredItems, headline, imgBorderRadius, modalImage}