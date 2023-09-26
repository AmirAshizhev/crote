import './Main.scss'

function Main() {
  return (
    <main className="main">
      <section className="cards">
        <ul className="cards__list">
          <li className="card">
            <div className='card__avatar'>
              <img src='' alt="изображение персонажа" />
            </div>
            <div className='card__info'>
              <h3>Аянакоджи Киётака</h3>
              <p>2-B</p>
            </div>
          </li>

          <li className="card">
            <div className='card__avatar'>
              <img src='' alt="изображение персонажа" />
            </div>
            <div className='card__info'>
              <h3>Хорикита сузуне</h3>
              <p>2-B</p>
            </div>
          </li>
          <li className="card">
            <div className='card__avatar'>
              <img src='' alt="изображение персонажа" />
            </div>
            <div className='card__info'>
              <h3>Коенджи Руске</h3>
              <p>2-B</p>
            </div>
          </li>

          <li className="card">
            <div className='card__avatar'>
              <img src='' alt="изображение персонажа" />
            </div>
            <div className='card__info'>
              <h3>Кушида Кике</h3>
              <p>2-B</p>
            </div>
          </li>

          <li className="card">
            <div className='card__avatar'>
              <img src='' alt="изображение персонажа" />
            </div>
            <div className='card__info'>
              <h3>Сакаянаги Арису</h3>
              <p>2-B</p>
            </div>
          </li>


        </ul>
      </section>

    </main>
  )
}

export default Main
