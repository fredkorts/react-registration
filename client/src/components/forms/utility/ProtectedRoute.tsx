import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loginStatus, ...rest } : any) => {
  return (
    <Route {...rest} render={
      props => {
        if (loginStatus) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/unauthorized',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;
