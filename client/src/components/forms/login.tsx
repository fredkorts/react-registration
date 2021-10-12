import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function Login({loginUser} : any) {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
        <Avatar sx={{ 
          m: 1, 
          bgcolor: 'secondary.main',
          margin: '0 auto',
          }}
        >
          <LockOutlinedIcon />
        </Avatar>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          onChange={ (e) => {setEmail(e.target.value)} }
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={ (e) => {setPassword(e.target.value)} }
          autoFocus
        />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={ ()=> {loginUser(email, password)}}
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </>
  );
}

export default Login;
