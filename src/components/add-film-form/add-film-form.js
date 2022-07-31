import { Component } from "react";
import "./add-film-form.css";

class AddFilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      grade: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length === 0 || !this.state.grade) { 
        alert ("Введите название фильма и его оценку");
        return;
    }
    this.props.onAdd(this.state.name, this.state.grade);
    this.setState({
      name: "",
      grade: "",
    });
  };

  render() {
    const { name, grade } = this.state;
    return (
      <div className="addFilmForm">
        <h2>Добавьте новый фильм</h2>

        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Название"
            onInput={this.onValueChange}
          />
          <input
            type="number"
            name="grade"
            value={grade}
            placeholder="Рейтинг"
            onInput={this.onValueChange}
          />
          <button type="submit" className="btn btn-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default AddFilmForm;
