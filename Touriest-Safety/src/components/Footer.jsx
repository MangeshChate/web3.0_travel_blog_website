import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    
    <footer className="text-center text-lg-start bg-light text-muted">
     
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
       
        <div>
          <a href="" className="me-4 text-reset">
            <FacebookIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <TwitterIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <InstagramIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <WhatsAppIcon/>
          </a>
         
        </div>
       
      </section>
     
    
      
    
      
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        
        <a className="text-reset fw-bold" href="">ViceCityBlogs.in</a>
      </div>
      
    </footer>
    
  )
}

export default Footer
