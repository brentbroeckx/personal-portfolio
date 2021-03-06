import Head from 'next/head'
import About from '../components/About'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Stage from '../components/Stage'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className='scroll-container'>
      <Head>
        <title>Portfolio - Brent Broeckx</title>
        <meta name="description" content="Brent Broeckx Portfolio website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"></link>
      </Head>

      <main className='bg-gray-800'>
        <Introduction />
        <div className='bg-gray-700'>
          <About />
        </div>

        <Skills />
        <Projects />
        <div className='bg-gray-700'>
          <Stage />
        </div>
      </main>

      <Footer />
    </div>
  )
}
