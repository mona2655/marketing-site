import React from 'react'
import CookieConsent from 'react-cookie-consent'

function Cookie() {
  return (
    
        <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="userConsent"
        className="bg-white"
        buttonStyle={{color:"#4e503b", fontSize:"13px"}}
        expires={150}
        >
            The website uses cookies to enhance user experince.{''}
            <a href='/privacy-policy' style={{color: "#FFD700"}}>
            Learn More
            </a>

        </CookieConsent>



    
  )
}

export default Cookie