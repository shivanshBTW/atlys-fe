import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import AuthModal from './components/AuthModal';
import { Feed } from './pages/Feed';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(
    null
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        showAuthModal,
        setShowAuthModal,
        currentUser,
        setCurrentUser,
      }}
    >
      <BrowserRouter>
        {showAuthModal && <AuthModal />}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
