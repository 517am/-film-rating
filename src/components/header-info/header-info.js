import "./header-info.css";

const HeaderInfo = ({counterFilms}) => {
    return (
        <div className="headerInfo">
            <h1>Оценка фильмов по мнению N</h1>
            <h2>Общее количество фильмов: {counterFilms}</h2>
        </div>
    )
}

export default HeaderInfo;