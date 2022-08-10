import './App.css';
import QRCode from 'qrcode';
import { useState } from 'react';
import LiveQRCode from '../components/live-qrcode';

function App() {
  const [qrText, setQRtext] = useState('');
  const [qrCode, setQRCode] = useState('');
  const generateQRCode = () => {
    QRCode.toDataURL(qrText, {
      width: 900,
      margin: 3
    }, (err, url) => {
      if(err) {
        return console.log(err)
      } else {
        return setQRCode(url);
      }
    });
  };
  const handleQRCode = (e) => {
    setQRtext(e.target.value);
    generateQRCode();
  };
  
  return (
    <div className='App'>
      <LiveQRCode value={qrText} />
      <div>
        <input type='text' value={qrText} onChange={handleQRCode} style={{margin: 10}} />
        <a href={qrCode} download={`${qrText}.png`}>download</a>
      </div>
    </div>
  );
};

export default App;