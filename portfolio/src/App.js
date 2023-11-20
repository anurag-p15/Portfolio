import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './home';
import Projects from './project';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path ="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
