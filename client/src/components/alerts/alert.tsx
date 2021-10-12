import Alert from '@mui/material/Alert';

export default function AlertComponent({alertType, message} : any) {
  return (
    <Alert severity={alertType}>
      {message}
    </Alert>
  );
}