import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="UpComping" fetchURl={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURl={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchURl={requests.requestTrending} />
      <Row rowId="4" title="Top Rated" fetchURl={requests.requestTopRated} />
      <Row rowId="5" title="Horror" fetchURl={requests.requestHorror} />
    </div>
  );
};

export default Home;
