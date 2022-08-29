import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'

export const Rotas = () => {

    return(
        <BrowserRouter>
           <Routes>
              <Route path='/'>
                <Home/>
              </Route>
              <Route>
                <Navigate to='/'/>
              </Route>
           </Routes>
        </BrowserRouter>
    )
}