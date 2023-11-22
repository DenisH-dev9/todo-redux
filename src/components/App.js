import React from 'react';
import "../style/App.css"
import { RouterProvider } from 'react-router-dom'
import router from '../router';


const App = () => <RouterProvider router={router}></RouterProvider>

export default App;