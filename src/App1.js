import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserComponent } from './users/UserComponent';
import {BookComponent } from './books/BookComponent';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<UserComponent />} />
      <Route path="/books" element={<BookComponent />} />
      {/* <Route path="/book/:id" element={<BookPage />} />
      <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  </Router>
  );
}

export default App; 
