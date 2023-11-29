import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* <h1 style={{color: 'white'}}>Movie-Mania</h1> */}
      <Row title = "Originals" fetchUrl={requests.fetchOriginals} />
      <Row title = "Trending" fetchUrl={requests.fetchTrending} />
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title = "Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title = "Action" fetchUrl={requests.fetchActionMovies} />
      <Row title = "Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title = "Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
