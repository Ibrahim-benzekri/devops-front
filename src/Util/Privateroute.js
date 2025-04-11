
import { Navigate } from 'react-router-dom';
import { UseLocalState } from './UseLocalState';

const Privateroute = ({ children }) => {
const [jwt, setJwt] = UseLocalState("", "token");
console.log(jwt)
  return jwt && jwt!=="" ? children : <Navigate to="/login" replace />;
};

export default Privateroute;
