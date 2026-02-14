// src/App.tsx
import React from 'react';
import {  BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import DownloadApp from './website/pages/home/DownloadApp';


const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};


const App: React.FC = () => {
  return (
    <div className="font-montserrat bg-[#F3F4FF]">
      <Router>
        <AppRoutes />
        {/* <DownloadApp /> */}
      </Router>
    </div>
  );
};


export default App;
