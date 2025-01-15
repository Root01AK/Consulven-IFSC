import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ScrollProgress from './Components/ScrollProgress';
import Spinner from './Components/Spinner';

const Home = lazy(() => import('./Pages/HomePage'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Industrie = lazy(() => import('./Pages/Industries'));
const Contact = lazy(() => import('./Pages/ContactUs'));
const Careers = lazy(() => import('./Pages/Careers'));
const JobDetails = lazy(() => import('./Pages/JobDetails'));
const Teams = lazy(() => import('./Pages/Teams'));
const ServiceMain = lazy(() => import('./Pages/ServiceMain'));
const ServiceCard1 = lazy(() => import('./Pages/ServiceCard1'));
const ServiceCard2 = lazy(() => import('./Pages/ServiceCard2'));
const TeamMember = lazy(() => import('./Pages/TeamMember'));
const NotFound = lazy(() => import('./Pages/NotFound'));


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <ScrollProgress />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/industrie' element={<Industrie />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/career' element={<Careers />} />
              <Route path='/career/:jobId' element={<JobDetails />} />
              <Route path='/team' element={<Teams />} />
              <Route path='/team/:id' element={<TeamMember />} />
              <Route path='/service' element={<ServiceMain />} />
              <Route path='/service/Card1' element={<ServiceCard1 />} />
              <Route path='/service/Card2' element={<ServiceCard2 />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
