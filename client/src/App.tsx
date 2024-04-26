import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContextProvider';
import Header from './ui-kit/Header'
import Footer from './ui-kit/Footer'

import Login from './pages/Login';
import Setup from './pages/Setup';
import Validation from './pages/Validation';
import Home from './pages/Home';


function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <div className="flex flex-col">
          <Header />
          <main className="h-full min-h-screen flex-grow">
            <Routes>
              <Route path="/login" Component={Login} />
              <Route path="/setup" Component={Setup} />
              <Route path="/verify" Component={Validation} />
              <Route path="/" Component={Home} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GlobalContextProvider>
  )
}

export default App
