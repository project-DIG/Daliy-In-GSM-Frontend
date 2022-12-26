import Layout from 'components/Layout';
import { Main } from 'pages';
import User from 'pages/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'shared/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:user_id" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
