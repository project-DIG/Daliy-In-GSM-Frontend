import Layout from 'components/Layout';
import { Main } from 'pages';
import User from 'pages/User';
import Signin from 'pages/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'shared/globalStyles';
import SignupEmailPage from 'components/SignupPage/SignupEmailPage';
import Signup from 'pages/Signup';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:user_id" element={<User />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup_email" element={<SignupEmailPage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
