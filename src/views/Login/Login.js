import s from './login.module.css';

export default function Login() {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: 20 }}>
        Sign in to use Phonebook
      </h2>
      <form className={s.form} autoComplete="off">
        <label className={s.label}>
          E-mail
          <input type="email" name="email" className={s.input} autoFocus="on" />
        </label>
        <label className={s.label}>
          Password
          <input type="password" name="password" className={s.input} />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </>
  );
}
