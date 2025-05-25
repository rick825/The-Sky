import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/header/Header';
import About from '../components/About/About';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



const AppRoute = () => {

   const location = useLocation();
     const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);
  const isAdminPage = location.pathname.includes("admin");

   useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100); 
    return () => clearTimeout(timer);
  }, [location.pathname]);


  return (
      <>
      <ScrollToTop />
      
      {!isAdminPage  && <Header />}
      <main className="route-container">
        {loading ? (
          <div className="route-spinner">
            {/* <ClipLoader size={60} color="#c2410c" /> */}
          </div>
        ) : (
          <div className="fade-in-bottom">
             <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
        
        
      </Routes>
          </div>
        )}
      </main>
      {/* {isAdminPage && <AdminLayout />} */}
     
   

       
    </>
  );
};

const Container = () => {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
};

export default Container;
