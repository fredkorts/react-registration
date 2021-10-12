import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Registration({registerUser, registrationAlert} : any) {

  const [firstNameReg, setFirstNameReg] = useState<string>('');
  const [lastNameReg, setLastNameReg] = useState<string>('');

  const [emailReg, setEmailReg] = useState<string>('');
  const [passwordReg, setPasswordReg] = useState<string>('');

  const handleRegistration = () : void => {
    registerUser(firstNameReg, lastNameReg, emailReg, passwordReg);
    registrationAlert("New user registered!", 0, 'success');
  }

  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="firstname"
        label="First Name"
        name="firstname"
        onChange={ (e) => {setFirstNameReg(e.target.value)} }
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="lastname"
        label="Last Name"
        name="lastname"
        onChange={ (e) => {setLastNameReg(e.target.value)} }
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        onChange={ (e) => {setEmailReg(e.target.value)} }
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        onChange={ (e) => {setPasswordReg(e.target.value)} }
        autoFocus
      />

      <Button 
        type="submit"
        fullWidth
        variant="contained"
        disabled={!firstNameReg || !lastNameReg || !emailReg || !passwordReg}
        sx={{ mt: 3, mb: 2 }}
        onClick={ () => {handleRegistration()}}
      >
        Register
      </Button>
    </>
  );
}

export default Registration;
