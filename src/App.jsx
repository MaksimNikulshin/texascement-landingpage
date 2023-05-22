//Import components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Router from './Router'
import Home from '@pages/Home'
import Error from '@pages/Error'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Router />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
