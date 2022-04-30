import { useState } from 'react';
// import { Link,useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/auth-operations';
import { authOperations } from '../../redux/auth';

export default function RegisterView (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const navigate = useNavigate()
  // const location = useLocation()

  // function goToLogin(){
  //   navigate(location?.state?.from ?? 'login');
  // }

  const dispatch=useDispatch();

  const handleChange=({target:{name,value}})=>{
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

        case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }


    const handleSubmit = e => {
        e.preventDefault();
    
        dispatch(authOperations.register({name,email,password}))

        setName('');
        setEmail('');
        setPassword('');
      }

    return(
        <>
       
       <form onSubmit={handleSubmit}>
        <label >
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
       

      <button type="submit" >
         Register
        </button>
        
      </form></>
    )
}