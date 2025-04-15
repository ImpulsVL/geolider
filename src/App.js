import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>

            <Route path="/" element={<MainPage />} />

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
