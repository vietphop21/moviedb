import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Button } from 'antd'
import Viewmore from './Viewmore'
import Nav from './Nav'
import Input from 'antd'
import ReactPaginate from 'react-paginate'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'

const MovieDB = () => {
    const [value, setValue] = useState();
    const [page, setPage] = useState(1)
    let s = 0;
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=e6b3a1184c5a55bdcaf20c617421e610&query='
    const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=e6b3a1184c5a55bdcaf20c617421e610&page=4'
    const API_IMGAE = "https://image.tmdb.org/t/p/w500/"
    const [movie, setMovie] = useState([])
   
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e6b3a1184c5a55bdcaf20c617421e610&page=${page}`);
            setMovie(response.data.results)
        }
        fetchData();
    }, [page]); // Or [] if effect doesn't need props or state
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, value]);
    const handleSearch = async () => {
        const gg= {
            username:"Phop",
            age:20
        }
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e6b3a1184c5a55bdcaf20c617421e610&query=${value}`)
        const data = res.data.results;
        setMovie(data)
       
        window.scrollTo(0, 0)
    }
    const handlePageClick = (event) => {

        const s = event.selected + 1
        setPage(s)

    }
    const handleBack = () => {
        setPage(page - 1)
        if (page === 0)
            setPage(1)
    }
    return (
        <>
        <ToastContainer/>
            <Nav
                page={page}
                handleSearch={handleSearch}
                value={value}
                setValue={setValue}
            />
            <div class="movie-container">
                {movie.map((item) => {
                    return (
                        <>
                            <div class="container">
                                <img src={`${API_IMGAE}` + `${item.backdrop_path}`} />
                                <div class="title1">Title: {item.title}</div>
                                <Viewmore
                                    API_IMGAE={API_IMGAE}
                                    item={item}
                                />
                            </div>
                        </>
                    )
                })}
            </div>
                <ReactPaginate
                    nextLabel="Next  >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={4}
                    pageCount={50}
                    previousLabel="< Back"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />

        </>

    )
}
export default MovieDB;
