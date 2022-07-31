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
        { name: "Сплит", grade: "3", id: 1, favorit: false },
        { name: "Джокер", grade: "10", id: 2, favorit: true },
        { name: "Грязь", grade: "7", id: 3, favorit: false },
      ],
      searchInput: "",
      filter: "",
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

  onFavorit = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          return {...item, favorit: !item.favorit}
        }

        return item;

      })
    }))
  };

  searchFilms = (items, searchInput) => {
    if (searchInput.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(searchInput) > -1;
    });
  };

  onUpdateSearch = (searchInput) => {
    this.setState({ searchInput });
  };

  FilterFilms = (items, filter) => {
    switch (filter) {
      case "favorit":
        return items.filter((item) => item.favorit);
      case "moreGradeSeven":
        return items.filter((item) => item.grade > 7);
      default: {
        return items;
      }
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, searchInput, filter } = this.state;
    let counterFilms = this.state.data.length;
    const visibleDate = this.FilterFilms(
      this.searchFilms(data, searchInput),
      filter
    );

    return (
      <div className="app container">
        <HeaderInfo counterFilms={counterFilms} />
        <SearchPanel
          onUpdateSearch={this.onUpdateSearch}
          onFilterSelect={this.onFilterSelect}
        />
        <FilmsList data={visibleDate} onDelete={this.deleteItem} onFavorit = {this.onFavorit}/>
        <AddFilmForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
