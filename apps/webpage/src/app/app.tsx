import React, { useEffect, useState } from 'react';
import { Message } from '@souza-io/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const [value, setValue] = useState("");
  const [hide, setHide] = useState(false);

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to webpage!</h1>
        <img
          alt=""
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
        {!hide && <input type="email" value={value} onChange={e => setValue(e.target.value)} />}
        <button type="button" onClick={e => setHide(true)}>
          click me
        </button>
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
