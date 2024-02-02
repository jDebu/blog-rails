import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/admin/Dashboard'

export const AdminRoutes = () => (
  <Routes>
    <Route path="inicio" element={<Dashboard />} />
    <Route path="*" element={<Navigate to="inicio" replace />} />
  </Routes>
)
