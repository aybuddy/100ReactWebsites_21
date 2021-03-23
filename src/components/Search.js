import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Mic, SearchOutlined } from '@material-ui/icons';
import './Search.css';
import { useHistory } from 'react-router-dom';

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log('You hit the search >>>>>', input);

    history.push('/search');
  };

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchOutlined className='search__inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={search} variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            type='submit'
            onClick={search}
            variant='outlined'
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
