import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-600 hover:text-sky-500 transition-colors duration-300">
      {children}
    </a>
  </li>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-sky-600">
          Expert Academy
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="hidden md:inline-block bg-sky-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-sky-600 transition-all duration-300 shadow-sm hover:shadow-md">
            Login
          </button>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <button className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-sky-600 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
