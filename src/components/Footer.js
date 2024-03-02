import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <InstagramIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <p>@copyrights: 2024 ITSolutions.com</p>
        </div>
  )
}

export default Footer