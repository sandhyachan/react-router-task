import './App.css'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import All from './pages/All'
import Career from './pages/Career'
import CyberSecurity from './pages/CyberSecurity'
import DataScience from './pages/DataScience'
import FullStack from './pages/FullStack'

function App() {

  return (
    <>
    <Navbar/>
    <div className='container text-center'>
      <h1 className='fw-bold'>Browse GUVI courses</h1>
      <div className='row d-flex justify-content-center'>
      <section className='col-2'>
      <Link to=''><button type="button" className="btn btn-hover">All</button></Link>
      </section>
      <section className='col-3'>
      <Link to='/fullstackdevelopment'><button type="button" className="btn">Full Stack Development</button></Link>
      </section>
      <section className='col-2'>
      <Link to='/datascience'><button type="button" className="btn">Data Science</button></Link>
      </section>
      <section className='col-2'>
      <Link to='/cybersecurity'><button type="button" className="btn">Cyber Security</button></Link>
      </section>
      <section className='col-2'>
      <Link to='/career'><button type="button" className="btn">Career</button></Link>
      </section>
      </div>
      <All/>
      <Career/>
      <CyberSecurity/>
      <DataScience/>
      <FullStack/>
    </div>
    </>
  )
}

export default App