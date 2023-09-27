import './Main.scss'
import data from '../../data/kp-data.json'
import Card from '../Card/Card'

function Main() {

  console.log(data)

  const students = data.forEach((item)=>{
    console.log(item)
  })

  return (
    <main className="main">
      <section className="cards">
        <ul className="cards__list">
          <Card />
          <Card />
          <Card />

        </ul>
      </section>

    </main>
  )
}

export default Main
