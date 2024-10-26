'use client';

import { useRef } from 'react';
import { Button, FormControl, Input, Stack } from '@mui/material';

import { useData } from '../../hooks/useData';

import styles from './NewsletterForm.module.scss';

export function NewsletterForm() {
  const ref = useRef<HTMLFormElement>(null);
  const { handleSubscribe, loading, message, setMail, success } = useData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubscribe().then(() => ref.current?.reset());
  };

  return (
    <Stack alignItems='center' direction='column'>
      <h3>Join my newsletter</h3>
      <form ref={ref} onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor='email'>Stay up to date with our latest news and products.</label>
          <Input
            error
            required
            autoComplete='email'
            placeholder='Your email address'
            type='email'
            inputProps={{
              pattern: '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
              type: 'email',
            }}
            onChange={(e) => setMail(e.target.value)}
          />
          <Button
            className={styles['formButton']}
            disabled={loading}
            size='small'
            type='submit'
            variant='contained'
          >
            SUBSCRIBE
          </Button>
        </FormControl>
      </form>
      {!loading && <p className={success ? styles.success : styles.failure}>{message}</p>}
    </Stack>
  );
}
