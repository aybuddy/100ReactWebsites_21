import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from '@material-ui/icons';
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // Live API Call
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt=''
            className='searchPage__logo'
          />
        </Link>

        <div className='searchPage__headerBody'>
          <Search hideButtons />
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchOutlined />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <Description />
                <Link to='/all'>News</Link>
              </div>
              <div className='searchPage__option'>
                <Image />
                <Link to='/all'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOffer />
                <Link to='/all'>Shopping</Link>
              </div>
              <div className='searchPage__option'>
                <Room />
                <Link to='/all'>Maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVert />
                <Link to='/all'>More</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=''
                      className='searchPage__resultImage'
                    />
                  )}
                {item.displayLink} △
              </a>
              <a href={item.link} className='searchPage__resultTitle'>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
