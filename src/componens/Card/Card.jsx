import './Card.scss';

function Card({card}) {

  const {name, lastName, year, classGroup} = card

  return (
  <li className="card">
    <div className='card__avatar'>
      <img src='' alt="изображение персонажа" />
    </div>
    <div className='card__info'>
      <h3>{lastName} {name}</h3>
      <p>{year}-{classGroup}</p>
    </div>
  </li>
  );
}

export default Card;