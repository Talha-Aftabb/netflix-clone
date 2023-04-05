import axios from 'axios';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from './Movie';

const Row = ({ title, fetchURl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURl]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden z-10 group-hover:block"
          size={40}
        />
        <div
          id={'slider' + rowId}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <>{item?.backdrop_path && <Movie item={item} key={id} />}</>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden z-10 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
