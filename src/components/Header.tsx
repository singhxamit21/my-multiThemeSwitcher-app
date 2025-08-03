import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/themeSlice';
import { Link } from 'react-router-dom';

const Header = React.memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.currentTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setTheme(e.target.value));
    },
    [dispatch]
  );

  const bgClass = useMemo(() => {
    return theme === 'theme2'
      ? 'bg-gray-800 text-white'
      : theme === 'theme3'
      ? 'bg-pink-200 text-purple-800'
      : 'bg-white text-gray-800';
  }, [theme]);

  const selectClass = useMemo(() => {
    return `p-1 border rounded transition-colors duration-300 ${
      theme === 'theme2'
        ? 'bg-gray-700 text-white border-gray-500'
        : theme === 'theme3'
        ? 'bg-pink-100 text-purple-800 border-purple-400'
        : 'bg-white text-gray-800 border-gray-300'
    }`;
  }, [theme]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow transition-all duration-300 ${bgClass}`}
    >
      <div className="flex items-center justify-between px-4 h-16">
        <h1 className="text-xl font-bold">🌈 Theme App</h1>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/contact">Contact</Link>
          <select value={theme} onChange={handleChange} className={selectClass}>
            <option value="theme1">Theme 1 (Light)</option>
            <option value="theme2">Theme 2 (Dark)</option>
            <option value="theme3">Theme 3 (Colorful)</option>
          </select>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className={`flex flex-col md:hidden px-4 pb-4 space-y-2 ${bgClass}`}>
          <Link className="hover:underline" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="hover:underline" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="hover:underline" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <select value={theme} onChange={handleChange} className={selectClass}>
            <option value="theme1">Theme 1 (Light)</option>
            <option value="theme2">Theme 2 (Dark)</option>
            <option value="theme3">Theme 3 (Colorful)</option>
          </select>
        </div>
      )}
    </header>
  );
});

export default Header;
