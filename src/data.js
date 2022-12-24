import { FaCreditCard, FaBook, FaBriefcase,FaPeopleArrows } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { GrBlog } from 'react-icons/gr';
import { GiNewspaper } from 'react-icons/gi';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'Payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'Terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'Connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'Plugins', icon: <FaBook />, url: '/products' },
      { label: 'Libraries', icon: <FaBook />, url: '/products' },
      { label: 'Help', icon: <FaBook />, url: '/products' },
      { label: 'Billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'About', icon: <FaBriefcase />, url: '/products' },
      { label: 'Customers', icon: <FaBriefcase />, url: '/products' },
    ],
    },
    {
        page: 'resources',
        links: [
          { label: 'Support center', icon: <BiSupport />, url: '/products' },
            { label: 'Blog', icon: <GrBlog />, url: '/products' },
            { label: 'Newsroom', icon: <GiNewspaper />, url: '/products' },
            { label: 'Become a partner', icon: <FaPeopleArrows />, url: '/products' },
        ],
      },
];

export default sublinks;