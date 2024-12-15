import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div><h1>Home Page</h1></div>
  );
}

function About(){
  return(
    <div><h1>About Page</h1></div>
  );
}

function MyComponent() {
  const location = useLocation();
  useEffect(() => {
    console.log('Location updated:', location.pathname);
  }, [location]);

  return (
    <div>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}
//Solution: Using useEffect hook to handle location changes.  The useEffect hook with the location dependency ensures the component re-renders whenever the location changes, providing the updated path.