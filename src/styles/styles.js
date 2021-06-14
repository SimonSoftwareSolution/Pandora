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
    maxWidth : '1200px',
    fontSize : 20,
    marginTop : '200px',  
    backgroundColor : '#FFFFFF',
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

  export {pageStyles, img, root, backgroundColor, faqStyle, centeredItems, headline, imgBorderRadius}