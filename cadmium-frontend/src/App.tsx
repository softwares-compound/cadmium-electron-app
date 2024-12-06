// react-app/src/App.tsx
import { useEffect, useState } from 'react';
import './App.css';
import { ToMainPayload, FromMainPayload } from '../../src/types/types';
import ServerTest from './pages/server-test';

function App() {
  const [response, setResponse] = useState<string>('');

  // Function to send a message to the main process
  const sendMessageToMain = () => {
    const payload: ToMainPayload = { message: 'Hello from React!' };
    window.electronAPI.sendMessage('toMain', payload);
  };

  // Set up a listener for messages from the main process
  useEffect(() => {
    window.electronAPI.receiveMessage('fromMain', (data: FromMainPayload) => {
      setResponse(data.response);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Electron IPC Example</h1>
        <button onClick={sendMessageToMain}>Send Message to Main</button>
        {response && <p>Response from Main: {response}</p>}
        <ServerTest />
      </header>
    </div>
  );
}

export default App;
