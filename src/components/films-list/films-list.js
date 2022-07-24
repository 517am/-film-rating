import "./films-list.css"
import FilmsListItem from "./films-list-item/films-list-item";

const FilmsList = () => {
    return (
        <div className="filmsList">
            <ul>
                <li className="">
                 <FilmsListItem />
                </li>

                <li className="">
                 <FilmsListItem />
                </li>

                <li className="">
                 <FilmsListItem />
                </li>

                <li className="">
                 <FilmsListItem />
                </li>
                
            </ul>
        </div>
    )
}

export default FilmsList;