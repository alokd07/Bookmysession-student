import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '@/pages/_app';
import { Avatar } from '@mui/material';
import { Menu, Dropdown } from 'antd';
import {
  LogOutIcon,
  SettingsIcon,
  MessageIcon,
  HelpIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  const router = useRouter();
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/update">
          <span>Edit Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="messages">
        <span>Messages</span>
      </Menu.Item>
      <Menu.Item key="help">
        <Link href="/faq">
          <span>Help & FAQ</span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout}>
        <span className="text-red-600">Sign Out</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold text-primary">BookMySession</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/browse/All" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Find Tutors
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary font-medium transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Side - CTA and Profile */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  href={process.env.WEBSITE_TEACHER || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-block px-5 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Join as Teacher
                </Link>
                <button
                  onClick={() => router.push('/login')}
                  className="hidden sm:inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Sign In
                </button>
              </>
            ) : (
              <Dropdown overlay={profileMenu} trigger={['click']} placement="bottomRight">
                <button className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <Avatar
                    sx={{ width: 36, height: 36 }}
                    src={user?.imageUrl}
                    alt={user?.firstName}
                  />
                </button>
              </Dropdown>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Home
            </Link>
            <Link href="/browse/All" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Find Tutors
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              About
            </Link>
            <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              FAQ
            </Link>
            {!user && (
              <>
                <Link
                  href={process.env.WEBSITE_TEACHER || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Join as Teacher
                </Link>
                <button
                  onClick={() => {
                    router.push('/login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Sign In
                </button>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
