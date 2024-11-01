import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signup/SignUp';
import Signin from './pages/signin/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
