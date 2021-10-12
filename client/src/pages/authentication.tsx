import { useState } from "react";
import { useHistory } from "react-router";
import AlertComponent from "../components/alerts/alert";
import Registration from "../components/forms/registration";
import Login from "../components/forms/login";
import Axios from "axios";
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";

function Authentication({loginCallback, userCallback} : any) {

  const [tabValue, setTabValue] = useState<number>(0);
  const [alertMessage, setAlertMessage] = useState<string>(''); 
  const [alertType, setAlertType] = useState<string>('');

  const history = useHistory();

  // Switch tab from Register to Login
  const handleTabChange = (event : any, newValue : number) : void => {
    setTabValue(newValue);
    setAlertMessage('');
  };

  // Callback function to toggle and display an alert message.
  const handleAlertMessage = (message : string, tab : number, messageType : string) : void => {
    setTabValue(tab);
    setAlertMessage(message);
    setAlertType(messageType);
  }

  const a11yProps = (index : number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const TabPanel = (props : any) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  // User registration logic.
  const register = (firstNameReg : string, lastNameReg : string, emailReg : string, passwordReg : string) : void => {
    Axios.post<any>('http://localhost:3001/register', 
    {
      firstname: firstNameReg, 
      lastname: lastNameReg, 
      email: emailReg, 
      password: passwordReg
    }).then( (response) => {
      console.log("Response: ", response, typeof response);
      if (response.data.message) {
        handleAlertMessage(response.data.message, 1, 'warning');
      } else {
        handleAlertMessage("New user registered!", 0, 'success');
      }
      console.log(response);
    })
  };

  // User login logic.
  const login = (email : string, password : string) : void => {
    Axios.post<any>('http://localhost:3001/login', 
    {
      email: email,
      password: password
    }).then( (response) => {
      if (response.data.message) {
        loginCallback(false)
        handleAlertMessage(response.data.message, 0, 'warning');
      } else {
        loginCallback(true)
        userCallback(response.data[0])
        history.push('/account');
      }
    })
  };

  return (
    <div>
      <Container 
        component="main" 
        maxWidth="xs">
        <Box 
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
              <Tab label="User login" {...a11yProps(0)} />
              <Tab label="Registration" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <Login  loginUser={login} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Registration 
              registerUser={register} 
              registrationAlert={handleAlertMessage}  
            />
          </TabPanel>
        </Box>
        {alertMessage && (
          <AlertComponent 
            alertType={alertType} 
            message={alertMessage} 
          />
        )}
      </Container>
  </div>
  );
}

export default Authentication;