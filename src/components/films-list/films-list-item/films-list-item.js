import "./films-list-item.css";

const FilmsListItem = () => {
  return (
    <div className="item">
      <a href="">Сплит</a>
      <span className="grade"><span>10</span>/10</span>
      <div className="icons">
        <span>
          <i class="fas fa-star"></i>
        </span>
        <span>
          <i class="fas fa-trash"></i>
        </span>
      </div>
    </div>
  );
};

export default FilmsListItem;
