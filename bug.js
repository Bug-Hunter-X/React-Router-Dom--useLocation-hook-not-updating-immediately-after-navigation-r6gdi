import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

//In Home.js
function Home(){
  return(
    <div><h1>Home Page</h1></div>
  );
}

//In About.js
function About(){
  return(
    <div><h1>About Page</h1></div>
  );
}

//In another component
function MyComponent(){
  let location = useLocation();
  console.log(location.pathname);
}

//Problem: Incorrect path resolving or unexpected behavior when navigating between routes. The useLocation hook does not update immediately. For example, if you navigate from '/' to '/about', the console log might still print '/' for a brief moment before updating to '/about'.