import s from './register.module.css';

export default function RegisterView() {
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //         case 'name':
  //             return setName(value);
  //         case 'email':
  //             return setEmail(value);
  //         case 'password':
  //             return setPassword(value);
  //         default:
  //             return;
  //     }
  // };

  // const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch(authOperations.register({ name, email, password }));
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  // };

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: 20 }}>Create an account</h2>
      <br />
      <form
        // onSubmit={handleSubmit}
        className={s.form}
        autoComplete="off"
      >
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            // value={name}
            // onChange={handleChange}
            className={s.input}
            autoFocus="on"
          />
        </label>

        <label className={s.label}>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="enter e-mail"
            // value={email}
            // onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="create password"
            // value={password}
            // onChange={handleChange}
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
