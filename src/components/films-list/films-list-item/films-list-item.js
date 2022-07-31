import "./films-list-item.css";

const FilmsListItem = (props) => {

    const { name, grade, onDelete, onFavorit, favorit } = props;

    let classNames = "q";
    if (favorit) {
      classNames += " favorit";
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
          <span className={classNames} onClick={onFavorit}>
            <i class="fas fa-star"></i>
          </span>
          <span onClick={onDelete}>
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
}

export default FilmsListItem;
