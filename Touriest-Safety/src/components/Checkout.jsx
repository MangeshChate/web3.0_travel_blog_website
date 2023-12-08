import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Person2, Security } from "@mui/icons-material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useInView } from 'react-intersection-observer';

function FeatureCard({ icon, title, description }) {
  return (
    <Card style={{ width: "100%", maxWidth: "400px" }} className='shadow-lg fade-in'>
      <CardContent className="d-flex flex-column align-items-center">
        {icon}
        <Typography variant="h5" component="div" className="mt-3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Checkout() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} id={"features"} className={`rounded-5 mt-2 mb-2 text-light p-5 d-flex flex-column justify-content-center align-items-center ${inView ? 'fade-in' : ''}`}>
      <div className='p-5 flex flex-col justify-center items-center gap-4 white-blur-glass w-100 h-100'>
        <h1 className='text-5xl fw-bold text-primary'>Discover Our Platform's Capabilities</h1>

        <div className="container mt-4 d-flex justify-content-evenly gap-4">
          <FeatureCard
            icon={<Security style={{ fontSize: 50, color: "#3f51b5" }} />}
            title="Most Secure"
            description="Your data is protected with state-of-the-art security measures, ensuring a safe and worry-free experience."
          />

          <FeatureCard
            icon={<InsertEmoticonIcon style={{ fontSize: 50, color: "#4caf50" }} />}
            title="Easy"
            description="Simplifying your travel experience – from planning to sharing your adventures – with a user-friendly interface."
          />

          <FeatureCard
            icon={<Person2 style={{ fontSize: 50, color: "#ff5722" }} />}
            title="User Friendly"
            description="Designed with you in mind. Enjoy a seamless and intuitive experience tailored for all types of travelers."
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
