/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Employer from '../components/employer/Emp_ar';
import axios from 'axios';

function employerDoc({ token }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the API and pass the JWT token with the request headers
    axios.get('http://10.0.0.215:7000/api/mashhad-data/1000460459', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [token]);

  return (
    <div className="md:w-1/2 mx-auto shadow-2xl rounded-3xl pb-2 bg-gray-100">
      <div className="my-10 p-10">
        
          <Employer data={data} />
      
      </div>
    </div>
  );
}

// Use the withAuth higher-order component to pass the JWT token as a prop
export default employerDoc;
