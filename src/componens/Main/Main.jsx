import './Main.scss'
import data from '../../data/kp-data.json'
import Card from '../Card/Card'

function Main() {

  console.log(data)

  const students = data.map((card) => (
    <Card
      card={card}
    />
  ))

  console.log(students)

  return (
    <main className="main">
      <section className="cards">
        <ul className="cards__list">
          {students}
        </ul>
      </section>

    </main>
  )
}

export default Main
