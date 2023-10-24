import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployerTraining = () => {
  const [employerInfo, setEmployerInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the CSRF token from local storage
        const csrfToken = localStorage.getItem('csrfToken');
        const sessionId = localStorage.getItem('sessionId');

        // Send a request to the API with the CSRF token in the "Authorization" header
        const response = await axios.get('http://10.0.0.215:7000/api/mashhad-data/1000460459/', {
          headers: {
            Authorization: `Token ${csrfToken}`,
            'X-Session-Id': sessionId
          }
        });

        // Extract the specific data you want to display
        const { emp_no, full_name, gender, govemploymentdthjr } = response.data;

        // Set the employer information
        setEmployerInfo({
          emp_no,
          full_name,
          gender,
          govemploymentdthjr
        });

        setLoading(false);
      } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('API Error Data:', error.response.data);
            console.error('API Error Status:', error.response.status);
            console.error('API Error Headers:', error.response.headers);
          } else if (error.request) {
            // The request was made, but no response was received
            console.error('API Request Error:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.error('API Error Message:', error.message);
          }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white">
      <div className="my-10 p-10">
        <h1>تدريب</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>رقم الموظف: {employerInfo.emp_no}</p>
            <p>الاسم الكامل: {employerInfo.full_name}</p>
            <p>الجنس: {employerInfo.gender}</p>
            <p>سنة التوظيف: {employerInfo.govemploymentdthjr}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerTraining;
