import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/admin/HomePage'

export const AdminRoutes = () => (
  <Routes>
    <Route path="home" element={<HomePage />} />
    <Route path="*" element={<Navigate to="home" replace />} />
  </Routes>
)
