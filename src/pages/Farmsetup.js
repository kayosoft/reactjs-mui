import React from 'react';


// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';

import {Form} from '../components/farmsetup';



// ----------------------------------------------------------------------
const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 700,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 700,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));


export default function Farmsetup() {
 

  

  

  return (
    <RootStyle title="Tunzi Smart Farm: Farm Setup | Tunzi Smart Farm">
      
      <AuthLayout>
        
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
         
          <img src="/static/illustrations/farm.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Farm Setup
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Complete farm profile.</Typography>
          </Stack>
          
          {/* Form component */}
          <Form />

        

          
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
