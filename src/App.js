import logo from './logo.svg'
import './App.css'
import MyNav from './components/MyNav'
import Home from './components/Home'
import Footer from './components/Footer'
import Project from './components/Project'
import About from './components/About'
import Middle from './components/Middle'

function App() {
  return (
    <div className='App'>
      <div>
        <MyNav />

        <Middle />
        <Footer />
      </div>
    </div>
  )
}

export default App
