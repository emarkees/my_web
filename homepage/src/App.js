import './App.css';
import Navbar from './Components/Navbar';
import  Project  from './Pages/Project';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
//import FontAwesome from  ‘@fortawesome/react-fontawesome’

function App() {
  return (
    

    <BrowserRouter>
    <Navbar />,
      
      <Routes>
        <Route path="/" exact >
        
        <Route path="Project" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
