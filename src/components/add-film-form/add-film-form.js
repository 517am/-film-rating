import "./add-film-form.css";

const AddFilmForm = () => {
    return (
        <div className="addFilmForm">
            <h2>Добавьте новый фильм</h2>
            <form action="">
                <input type="text" placeholder="Название" />
                <input type="text" placeholder="Рейтинг" />
                <button className="btn btn-light">Добавить</button>
            </form>
        </div>
    )
} 

export default AddFilmForm;