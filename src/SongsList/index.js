import {FiTrash} from 'react-icons/fi'
import './index.css'

const SongsList = props => {
  const {data, onDeleteClick} = props
  const {genre, imageUrl, duration, name, id} = data
  const onClickDelete = () => {
    onDeleteClick(id)
  }
  return (
    <li className="each-song-container">
      <div className="image-name-container">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          .
          <FiTrash />
        </button>
      </div>
    </li>
  )
}

export default SongsList
