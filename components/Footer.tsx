import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import YouTubeIcon from './icons/YouTubeIcon';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sky-500 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-50 border-t border-sky-100">
      <div className="container mx-auto px-6 py-8 text-center text-gray-600">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink href="https://instagram.com">
            <InstagramIcon className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="https://linkedin.com">
            <LinkedInIcon className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="https://youtube.com">
            <YouTubeIcon className="w-6 h-6" />
          </SocialLink>
        </div>
        <p>&copy; {new Date().getFullYear()} Expert Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
