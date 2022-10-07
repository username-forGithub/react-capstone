/* eslint-disable */
import React, { useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchStocks } from '../redux/slices/dataSlice';
import Navbar from '../components/Navbar';
import Subnav from '../components/Subnav';
import image from '../assets/share.png';

function Listing() {
  const navigate = useNavigate();
  const fetchedAllStocks = useSelector((state) => state.allData.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fetchedAllStocks.length) {
      dispatch(fetchStocks());
    }
  }, [dispatch]);

  const handleDetails = (id) => navigate(`/details/${id}`);
  const [search, setSearch] = useSearchParams();
  return (
    <div className="wrapper">
      <Navbar path="/" />
      <Subnav title="Dow Jones" />
      <input
        className="search-title"
        type="text"
        value={search.get('filter') || ''}
        placeholder="SEARCH STOCKS"
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) {
            setSearch({ filter });
          } else {
            setSearch({});
          }
        }}
      />
      <ul className="listul">
        {fetchedAllStocks
          .filter((i) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const name = i.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <li key={item.name}>
              <button onClick={() => handleDetails(item.name)} type="button" className="stock-card">
                <h3>{item.symbol}</h3>
                <h4 className="stock-name">{item.name}</h4>

                <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
                </svg>
                <img className="share" src={image} alt="share" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Listing;
