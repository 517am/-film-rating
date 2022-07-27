  import { Component } from "react";

  import HeaderInfo from "./components/header-info/header-info";
  import SearchPanel from "./components/search-panel/search-panel";
  import FilmsList from "./components/films-list/films-list";
  import AddFilmForm from "./components/add-film-form/add-film-form";
  import "./App.css";

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [
          { name: "сплит", grade: "3", id: 1, favorit: false },
          { name: "джокер", grade: "10", id: 2, favorit: true },
          { name: "грязь", grade: "7", id: 3, favorit: false },
        ],
      };

      this.maxId = 4;
    }

    deleteItem = (id) => {
      this.setState(({ data }) => {
        return {
          data: data.filter((item) => item.id !== id),
        };
      });
    };

    addItem = (name, grade) => {
      const newItem = {
        name,
        grade,
        favorit: false,
        id: this.maxId++,
      };

      this.setState(({ data }) => {
        const newArrItems = [...data, newItem];
        return {
          data: newArrItems,
        };
      });
    };

    render() {
      let counterFilms = this.state.data.length;
      return (
        <div className="app container">
          <HeaderInfo counterFilms={counterFilms}/>
          <SearchPanel />
          <FilmsList data={this.state.data} onDelete={this.deleteItem} />
          <AddFilmForm onAdd={this.addItem} />
        </div>
      );
    }
  }

  export default App;
