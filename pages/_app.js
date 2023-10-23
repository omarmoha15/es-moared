import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/layout';
import withAuth from './api/withAuth'; // Replace with the correct path to your withAuth.js file

const protectedRoutes = [
  '/employerIfo',
  '/assignments',
  '/MyAssignment',
  '/employerCalendar',
  '/employerVacations',
  '/employerRate',
  '/eRate',
  '/employerDoc'
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define an array of page paths that should not use the layout
  const pagesWithoutLayout = ['/login', '/register', '/404'];

  // Check if the current page is in the array of excluded pages
  const excludeLayout = pagesWithoutLayout.includes(router.pathname);

  // If the page is a protected route, apply withAuth HOC
  const ProtectedComponent = protectedRoutes.includes(router.pathname) ? withAuth(Component) : Component;

  // Render the layout only if the page is not excluded
  return excludeLayout ? <ProtectedComponent {...pageProps} /> : <Layout><ProtectedComponent {...pageProps} /></Layout>;
}

export default MyApp;
