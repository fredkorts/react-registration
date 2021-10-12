import { useHistory } from "react-router";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Account = (userData : any) => {

  const user = userData.userData;

  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  }

  return (
    <div>
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
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell><b>First Name</b></TableCell>
                  <TableCell>{user.first_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Last Name</b></TableCell>
                  <TableCell>{user.last_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>E-mail</b></TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={ () => {handleLogout()}}
        >
          Sign Out
        </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Account;
