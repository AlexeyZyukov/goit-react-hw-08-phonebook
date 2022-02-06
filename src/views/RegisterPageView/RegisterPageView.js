import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import s from './RegisterPageView.module.css';

export default function RegisterPageViewView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authOperations.register({
        name,
        email,
        password,
      }),
    );
    reset();
  };

  function reset() {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: 20 }}>
        Register to create an account
      </h2>
      <br />
      <form onSubmit={handleSubmit} className={s.form} autoComplete="on">
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={name}
            onChange={handleChange}
            required
            autoFocus="on"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            className={s.input}
          />
        </label>

        <label className={s.label}>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="enter e-mail"
            value={email}
            onChange={handleChange}
            required
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="create password"
            value={password}
            onChange={handleChange}
            required
            className={s.input}
          />
        </label>

        <button type="submit" className={s.button}>
          Register
        </button>
      </form>
    </>
  );
}
