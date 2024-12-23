import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <Link className="card" to={`/property/${props.link}`}>
      <p className="card__title">{props.titleImage}</p>
      <img className="card__img" src={props.srcImage} alt={props.altImage} />
    </Link>
  )
}

export default Card
