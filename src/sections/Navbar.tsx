import React from 'react';
import CardNav, { CardNavItem } from '../components/CardNav';

const Navbar = () => {
  const items: CardNavItem[] = [
    {
      label: 'About',
      bgColor: '#1C1C21',
      textColor: '#fff',
      links: [
        { label: 'Me', href: '#about' },
      ],
    },
    {
      label: 'Portfolio',
      bgColor: '#18181D',
      textColor: '#fff',
      links: [
        { label: 'Work', href: '#work' },
      ],
    },
    {
      label: 'Connect',
      bgColor: '#141418',
      textColor: '#fff',
      links: [
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <CardNav
      logo=""
      logoAlt="Luca"
      items={items}
      buttonBgColor="#fff"
      buttonTextColor="#000"
      className="fixed z-50"
    />
  );
};

export default Navbar;
