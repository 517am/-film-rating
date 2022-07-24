import HeaderInfo from './components/header-info/header-info';
import SearchPanel from './components/search-panel/search-panel';
import FilmsList from './components/films-list/films-list';
import AddFilmForm from './components/add-film-form/add-film-form';
import './App.css';


function App() {
  return (
    <div className="app container">
    <HeaderInfo />
    <SearchPanel />
    <FilmsList />
    <AddFilmForm />
    </div>
  );
}

export default App;
