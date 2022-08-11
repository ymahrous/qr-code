import './App.css';
import QRCode from 'qrcode';
import { useState } from 'react';
import LiveQRCode from '../components/live-qrcode';

export default function App() {
  const [qrText, setQRtext] = useState('');
  const [qrCode, setQRCode] = useState('');
  const generateQRCode = () => {
    QRCode.toDataURL(qrText, {
      width: 900,
      margin: 3
    }, (error, url) => {
      if(error) {
        return console.log(error.message);
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
      <div className='below-qr'>
        <input type='text' value={qrText} onChange={handleQRCode} />
        <a href={qrCode} download={`${qrText}.png`}>download</a>
      </div>
    </div>
  );
};