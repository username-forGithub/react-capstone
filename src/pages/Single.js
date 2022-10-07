import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocks } from '../redux/slices/dataSlice';
import Navbar from '../components/Navbar';
import Subnav from '../components/Subnav';

function Single() {
  const { Id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);
  const details = useSelector((state) => state.allData.stocks).filter((e) => e.name === Id)[0];
  console.log(details);
  return (
    <div className="wrapper">
      <Navbar path="single" />
      {details && (
        <Subnav title={details.name} symbol={details.symbol} />
      )}
      <div className="single-text">Stock details</div>
      {details && (
        <div className="detail-wrapper">
          <div>
            <span>
              Sector: &nbsp;
              {details.sector}
            </span>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
          </div>
          <div>
            <span>
              Founded: &nbsp;
              {details.dateFirstAdded}
            </span>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
          </div>
          <div>
            <span>
              DateFirstAdded: &nbsp;
              {details.founded}
            </span>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
          </div>
          <div>
            <span>
              headQuarter: &nbsp;
              {details.headQuarter}
            </span>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
          </div>
          <div>
            <span>
              Subsector: &nbsp;
              {details.subSector}
            </span>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
          </div>
          <div>
            <span>
              Cik: &nbsp;
              {details.cik}
            </span>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default Single;
