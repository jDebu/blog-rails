import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/admin/HomePage'
import { HomeTab } from '../components/ui/HomeTab'

export const AdminRoutes = () => (
  <Routes>
    <Route path="home" element={<HomeTab />} />
    <Route path="articles" element={<HomeTab />} />
    <Route path="*" element={<Navigate to="home" replace />} />
  </Routes>
)
