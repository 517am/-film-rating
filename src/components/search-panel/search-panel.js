import './search-panel.css'

const SearchPanel = () => {
    return (
        <div className="searchPanel">
        <input type="text" placeholder='Найти фильм' className='w-100'/>
        <button className='btn btn-danger'>Все фильмы</button>
        <button className='btn btn-danger'>Избранные</button>
        <button className='btn btn-danger'>Оценка больше</button>
    </div>
    )
} 

export default SearchPanel;