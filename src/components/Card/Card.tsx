import './Card.scss';

interface ICardProps {
  lastName: string;
  name: string;
  classGroup: string;
  year: number;
  imgs: string[];
  about: string;
  position: string;
}

interface ICard{
  card: ICardProps
}

function Card({card}:ICard) {
  const {lastName, name, year, classGroup, imgs } = card

  return (
  <li className="card">
    <div className='card__avatar'>
    <img src={`${imgs[0]}`} alt="изображение персонажа" />
    </div>
    <div className='card__info'>
      <h3>{lastName} {name}</h3>
      <p>{year}-{classGroup}</p>
    </div>
  </li>
  );
}

export default Card;