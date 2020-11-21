import React from 'react';
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Banner />

            <div className="container">
                <div className="app-movies">
                    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
                    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
                    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
                    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
                </div>
            </div>

            <footer className="footer">
                <a className="footer__link" href="mailto:ap.sky@yandex.ru">ap.sky@yandex.ru&copy;2020</a>
            </footer>
        </div>
    );
}

export default App;
