import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/Homepage.css';
import '../styles/Card.css';
import { useParams } from 'react-router-dom';

const Homepage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search } = useParams();
  console.log({search});

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/homepagecontent');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const sortedCourses = data.sort((a, b) => a['subject-name'].localeCompare(b['subject-name']));

      setCourses(sortedCourses);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(`Error fetching data. Please try again later. ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]); // Empty dependency array to run the effect only once on mount

  const filteredCourses = courses.filter(course =>
    (search ?
        course['subject-name'].toLowerCase().includes(search.toLowerCase()) ||
        course['subject-code'].toLowerCase().includes(search.toLowerCase()) :
        true
    )
  );

  const handleRefresh = () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div className="homepage">
      <div>
        <button onClick={handleRefresh}>Refresh Data</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div className="card-container">
          {filteredCourses.map((course, index) => (
            <Card
              key={index}
              course={course}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;