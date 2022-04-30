import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import RegisterView from '../views/RegisterView/RegisterView';
// import AuthNav from './AuthNav/AuthNav';
import LoginView from '../views/LoginView/LoginView';
import ContactsView from '../views/ContactsView/ContactsView';
import AppBar from './AppBar/AppBar';
import HomeView from '../views/HomeView/HomeView'


import './App.css';

const App = () => {
  return (
    <>
<AppBar />
      

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomeView />}/>
            <Route path="register" element={<RegisterView/>} />
            

            <Route path="login" element={<LoginView />} />

            <Route path="contacts" element={<ContactsView/>} />
           
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

// import { useSelector } from 'react-redux';
// import Form from './Form/Form.jsx';
// import Section from './Section/Section';
// import Contacts from './Contacts/Contacts';
// import Filter from './Contacts/Filter/Filter';

// import './App.css';

// const App = () => {
//   const { status, error } = useSelector(state => state.items);

//   return (
//     <>
//       <Section title="Phonebook">
//         <Form />
//       </Section>

//       <Section title="Contacts">
//         <Filter />

//         <Contacts />
//         {status === 'loading' && <h2>Loading...</h2>}
//         {error && <h2>{error}</h2>}
//       </Section>
//     </>
//   );
// };

// export default App;
