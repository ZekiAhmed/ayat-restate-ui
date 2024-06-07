import Navbar from './components/navbar/Navbar'
import './layout.scss'
import HomeePage from './routes/homePage/HomeePage'

const App = () => {
  return (
    <div className="layout">
      <div className="navba">
        <Navbar />
      </div>
      <div className="content">
        <HomeePage />
      </div>
    </div>
  )
}

export default App