import "./films-list.css";
import FilmsListItem from "./films-list-item/films-list-item";

const FilmsList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const {id, ...itemProps } = item;
    return <FilmsListItem key={id} {...itemProps} onDelete = {() => onDelete(id)} />;
  });

  return (
    <div className="filmsList">
      <ul>{elements}</ul>
    </div>
  );
};

export default FilmsList;
