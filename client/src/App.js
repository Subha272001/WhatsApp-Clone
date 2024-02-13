import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId ="231300984944-n6isb5qmvcecriuem85bpmk46o8g17t4.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId = {clientId}>
      <AccountProvider>
        <Messanger/>
      </AccountProvider>
      
    </GoogleOAuthProvider>
   
    
  )
}

export default App;
