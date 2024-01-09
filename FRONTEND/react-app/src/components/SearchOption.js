import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { useHistory, useParams } from 'react-router-dom';

const SearchOption = () => {
  const [home, setHome] = useState('');
  const history = useHistory();
  const { home: currentHome } = useParams();

  useEffect(() => {
    setHome(currentHome || '');
  }, [currentHome]);

  const searchedItem = (e) => {
    setHome(e.target.value);
  };

  useEffect(() => {
    const trimmedHome = home.trim();
    if (trimmedHome !== '') {
      history.push(`/home/${trimmedHome}`);
    } else {
      history.push('/home'); // Redirect to /home when home is empty
    }
  }, [home, history]);

  return (
    <div className="middle-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={home}
          onChange={searchedItem}
        />
      </div>
    </div>
  );
};

export default SearchOption;
