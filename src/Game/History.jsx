import React, { useState, useEffect } from 'react';
import Navbar from '../Util/Navbar';
import Case from './Case';
import { UseLocalState } from '../Util/UseLocalState';

export default function History() {
  const [jwt, setJwt] = UseLocalState('', 'token');
  const [hist, setHist] = useState([]);
  const [globalScore, setGlobalScore] = useState(0);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const payloadBase64 = jwt.split('.')[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        const email = decodedPayload.sub;

        const response = await fetch('http://localhost:8080/api/v1/auth/historique', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setHist(data.responseList);
        setGlobalScore(data.globalScore);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    if (jwt) {
      fetchHistory();
    }
  }, [jwt]);

  return (
    <>
      <Navbar />
      <div>
        <p className='text-lg text-slate-900'>Score total des mauvais choix : {globalScore}</p>
        {hist.map((record, index) => (
        <div className='pt-2'>
            <Case  key={index} word={record.word} error={record.score} />
        </div>
        ))}
      </div>
    </>
  );
}
