import './Main.scss'
import {dataArr} from '../../data/kp-data'
import Card from '../Card/Card'

function Main() {

  console.log(dataArr)

  const students = dataArr.map((card) => (
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
