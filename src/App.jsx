import './index.css'
import Blackhole from './components/main/Blackhole'
// import StarsCanvas from './components/main/StarBackground'
import Navbar from './components/main/Navbar'
import Skills from './components/main/Skills'
// import { Metadata } from 'next';
import Timeline from './components/main/Timeline'
import Projects from './components/main/Projects'
import Contact from './components/main/Contact'

export const metadata = {
  title: "Space Portfolio",
  description: 'This is my portfolio',
}

const events = [
  {
    id: 1,
    title: 'Event 1',
    date: 'January 2022',
    description: 'Description for Event 1.',
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'February 2022',
    description: 'Description for Event 2.',
  },
];


function App() {

  return (
    <main className='h-full w-full'>
      <div className='flex flex-col w-screen h-screen gap-20'>
        <Blackhole />
      </div>
      {/* <StarsCanvas /> */}
      <Navbar />
      <div id="about-me"></div>
      <br />
      <br />
      <Timeline events={events} />
      <div id="skills"></div>
      <br />
      <br />
      <br />
      <Skills/>
      <div id="projects"></div>
      <br />
      <br />
      <br />
      <Projects/>
      <div id="contact"></div>
      <br />
      <br />
      <br />
      <Contact/>
      {/* {children} */}
    </main>
  )
}

export default App