import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import Container from '@mui/material/Container';

const Unauthorized = () => {
  return (
    <Container
      component="main" 
      maxWidth="xs"
    >
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <h1>403 - No Entry!</h1>
            <p>Uh oh, Looks like you're in the wrong place</p>
          </div>
          <p><Link to='/'>Back to Home</Link></p>
        </Box>
    </Container>
  )
}

export default Unauthorized;
