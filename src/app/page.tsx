import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Slider/>
      <Featured/>
      <Offer/>
      <Footer/>
    </main>
  )
}
