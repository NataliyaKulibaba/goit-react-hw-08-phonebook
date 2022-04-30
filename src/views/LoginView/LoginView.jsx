import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
// import { Link} from 'react-router-dom';

export default function LoginView(){
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange=({target:{name,value}})=>{
    switch (name) {
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
        
      
      
        dispatch(logIn({password,email}))
        setEmail('');
        setPassword('')
      
      }
    return(
        <>
       
        <form onSubmit={handleSubmit}>
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

 
         
 
         <label >
           <input
             type="password"
             name="password"
             value={password}
             onChange={handleChange}
             placeholder="Password"
            //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
         </label>
 
         {/* <Link to="contacts">
         <button  type="submit">
          LogIn
         </button>
      </Link> */}

         <button  type="submit">
         LogIn 
        
         </button> 
       </form></>
    )
}