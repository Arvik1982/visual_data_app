import { Route, Routes } from 'react-router-dom';
import StartPage from '../Pages/StartPage/StartPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ContentPage from '../Pages/ContentPage/ContentPage';


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<StartPage/>} />
      <Route path="/:id" element={<ContentPage/>} />      
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
