import { Link } from '@/fe/utils/aliases.types';

export const unauthorized: Link[] = [
  {
    key: 'footer-frequently-asked',
    text: 'F.A.Q.',
    href: '#',
    afterLink: '|',
  },
  {
    key: 'footer-become-out-partner',
    text: 'Become our Partner!',
    href: '#',
    afterLink: '|',
  },
  {
    key: 'footer-customer-service',
    text: 'Customer Service',
    href: '#',
    afterLink: '|',
  },
];

export const authorized: Link[] = [
  {
    key: 'footer-frequently-asked',
    text: 'F.A.Q.',
    href: '#',
    afterLink: '|',
  },
  {
    key: 'footer-customer-service',
    text: 'Customer Service',
    href: '#',
    afterLink: '|',
  },

  {
    key: 'footer-repository-of-knowledge',
    text: 'Repository of Knowledge',
    href: '#',
  },
];
