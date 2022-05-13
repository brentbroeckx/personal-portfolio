import Head from 'next/head'
import About from '../components/About'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio - Brent Broeckx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-800 container px-10'>
        <Introduction />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}
