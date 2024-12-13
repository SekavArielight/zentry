import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
    </main>
  )
}

export default App