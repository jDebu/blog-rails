import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/ui/Header'
import { PublicRoute } from './PublicRoute'
import { HomePage } from '../pages/HomePage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
    <main className="flex-1">
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute redirect={'/inicio'}>
              <HomePage />
            </PublicRoute>
          }
        />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default AppRouter