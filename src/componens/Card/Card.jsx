import './Card.scss';

function Card() {
  return (
  <li className="card">
    <div className='card__avatar'>
      <img src='' alt="изображение персонажа" />
    </div>
    <div className='card__info'>
      <h3>Аянакоджи Киётака</h3>
      <p>2-B</p>
    </div>
  </li>
  );
}

export default Card;