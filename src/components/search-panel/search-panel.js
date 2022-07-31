import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchInput: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchInput = e.target.value;
        this.setState({searchInput});
        this.props.onUpdateSearch(searchInput)
    }

  render() {

    return (
      <div className="searchPanel">
        <input type="text" placeholder="Найти фильм" className="w-100" value={this.state.searchInput} onChange={this.onUpdateSearch}/>
        <button onClick={() => this.props.onFilterSelect("all")} key="all" className="btn btn-danger">Все фильмы</button>
        <button onClick={() => this.props.onFilterSelect("favorit")} key="favorit" className="btn btn-danger">Избранные</button>
        <button onClick={() => this.props.onFilterSelect("moreGradeSeven")} key="moreGradeSeven" className="btn btn-danger">Оценка больше 7</button>
      </div>
    );
  }
}

export default SearchPanel;
