import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/main'
import EditItem from './pages/editItem'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/edit',
    element: <EditItem></EditItem>
  }
])

export default router