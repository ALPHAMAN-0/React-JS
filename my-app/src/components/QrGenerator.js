import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export default function QrGenerator(props) {
    const { text } = props;
    const [qrUrl, setQrUrl] = useState('');

    useEffect(() => {
      if (text) {
        QRCode.toDataURL(text).then(dataUrl => {
          console.log(dataUrl);
          setQrUrl(dataUrl);
        });
      }
    }, [text]);

    return (
    <div>
      <h1>QR Code Generator</h1>
      {qrUrl && <img src={qrUrl} alt="QR Code" />}
      {!text && <p>Enter some text on the Home page first</p>}
    </div>
  )
}
