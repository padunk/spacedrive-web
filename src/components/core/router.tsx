import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../layout/layout'
import CareerPage from '../page/career'
import Home from '../page/home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<CareerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
