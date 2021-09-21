import React from 'react';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function Header() {
    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography color='primary'>
            Kalumsggs
        </Typography>
      </Container>
    </React.Fragment>
    )
}

export default Header;
