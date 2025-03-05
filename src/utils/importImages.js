const importImages = import.meta.glob(
    ["../assets/*.jpg", "../assets/*.jpeg", "../assets/*.png"],
    { eager: true }
  );
  
  const Images = {
    logo: importImages["../assets/logo.png"]?.default,
    mainSection1: importImages["../assets/main-section1.png"]?.default,
    mainSection2: importImages["../assets/main-section2.png"]?.default,
    mainSectionLogo1: importImages["../assets/main-section-logo1.png"]?.default,
    mainSectionLogo2: importImages["../assets/main-section-logo2.png"]?.default,
    mainSectionLogo3: importImages["../assets/main-section-logo3.png"]?.default,
    quote: importImages["../assets/quote.png"]?.default,
    star: importImages["../assets/Star.png"]?.default,
    frame: importImages["../assets/Frame.png"]?.default,
    worksImage1: importImages["../assets/works-image1.png"]?.default,
    worksImage2: importImages["../assets/works-image2.png"]?.default,
    worksImage3: importImages["../assets/works-image3.png"]?.default,
  };
  
  export default Images;
  