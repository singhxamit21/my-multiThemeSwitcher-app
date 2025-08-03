import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { theme1, theme2, theme3 } from './themes/themes';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const currentTheme = useSelector((state: any) => state.theme.currentTheme);
  const themes = { theme1, theme2, theme3 };
  const activeTheme = themes[currentTheme];

  return (
    <div className={`${activeTheme.font} ${activeTheme.colors} min-h-screen`}>
      <BrowserRouter>
        <Header />
        <main className="pt-20 px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
