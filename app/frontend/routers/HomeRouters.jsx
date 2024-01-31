import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomeTab } from '../components/ui/HomeTab'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeTab />} />
    <Route path="/about" element={<HomeTab />} />
  </Routes>
)

export default HomeRoutes
