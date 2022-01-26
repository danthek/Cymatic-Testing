import { Board } from './Board';
import { Success } from './Success';
import { Login } from './Login';
import { Signup } from './Signup';
import { LogedOut } from './LogedOut';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path='/board' element={<Board />} />
              <Route path='/success' element={<Success />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/logedout' element={<LogedOut />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
      {/*  */}
    </Container>
  );
}
export default App;
