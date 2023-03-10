import React, { Component } from 'react';
import axios from 'axios';
import ResultsDisplay from './components/resultsdisplay';
import Title from './components/banner';
import SearchBar from './components/searchreviewusingmovie';
import Navbar from './components/navbar';
import './App.css';
import ResultSkel from './components/resultskel';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: {'X-Custom-Header': 'foobar'}
});

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieposts: [],
            reviewposts: []
        };
    }


    render() {
        return (

            
            <div className="app">
                <div className="nav-bar">
                    <Navbar />
                </div>

                {
                <div className="get-review">
                    <SearchBar />
                </div>
                }

                {
                <div className="results-display">
                    <ResultsDisplay />
                </div>
                }

                {/*
                    <div className="results-skel">
                        <ResultSkel />
                    </div>
                */}
            </div>
        )
    }
}
