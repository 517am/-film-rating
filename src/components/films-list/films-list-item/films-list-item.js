import { Component } from "react";
import "./films-list-item.css";

class FilmsListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorit: false,
    };
  }

  onFavorit = () => {
    this.setState(({ favorit }) => ({
      favorit: !favorit,
    }));
  };

  render() {
    const { name, grade, onDelete } = this.props;
    const { favorit } = this.state;

    let classNames = "";
    if (favorit) {
      classNames += "favorit";
    }

    return (
      <li className="item">
        <a className="itemName" href="">
          {name}
        </a>
        <span className="grade">
          <span>{grade}</span>/10
        </span>
        <div className="icons">
          <span onClick={this.onFavorit} className={classNames}>
            <i class="fas fa-star"></i>
          </span>
          <span onClick={onDelete}>
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default FilmsListItem;
