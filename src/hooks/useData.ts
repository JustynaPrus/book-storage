import { useState } from 'react';
import axios from 'axios';

import { STATUS_200 } from '@/constant/constant';

const postMailPath = '/api/mailingList';

export const useData = () => {
  const [mail, setMail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    setLoading(true);
    await axios
      .post(postMailPath, {
        mail: mail,
      })
      .then((res) => {
        if (res.status === STATUS_200) {
          setLoading(false);
          setSuccess(true);
          setMessage(res.statusText);
        } else {
          setLoading(false);
          setMessage(res.statusText);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessage(String(err.statusText));
      });
  };

  return { handleSubscribe, loading, message, setMail, success };
};
