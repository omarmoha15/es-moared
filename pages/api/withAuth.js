import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check for the JWT token in your preferred storage (e.g., Cookies)
      const token = Cookies.get('userData');

      if (!token) {
        // Redirect to the login page if the token is not present
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  // Add a display name to the HOC
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
