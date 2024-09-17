import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'core-js';

import App from './App';
import store from './store';

// Get the base URL from the environment variables (for GitHub Pages deployment)
const basename = process.env.PUBLIC_URL || '/';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router basename={basename}>
      <App />
    </Router>
  </Provider>
);
