'use client';

import { useState } from 'react';
import axios from 'axios';

import { STATUS_200 } from '@/constant/constant';

export function NewsletterForm() {
  const [mail, setMail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  const [messageState, setMessageState] = useState('');

  const Subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/api/mailingList', {
        mail: mail,
      })
      .then((res) => {
        if (res.status === STATUS_200) {
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageState(String(err.message));
      });
  };

  return (
    <div>
      <div>
        <h3>Join my newsletter</h3>
        <p>Stay up to date with our latest news and products.</p>
      </div>

      <form onSubmit={Subscribe}>
        <div>
          <input
            required
            autoComplete='email'
            placeholder='Your email address'
            type='email'
            onChange={(e) => setMail(e.target.value)}
          />

          <button disabled={loading} type='submit'>
            {!loading ?
            <p>SUBSCRIBE</p> :
            <div>loading... icon</div>}
          </button>
        </div>

        {success ?
        <p>{messageState}</p> :
        <p>{messageState}</p>}
      </form>
    </div>
  );
}
