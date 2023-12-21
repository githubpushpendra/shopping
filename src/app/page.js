import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Drawer from '../components/Drawer'
import Card from '../components/Card'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Filterbar from '../components/Filterbar'
import FilterSideBar from '@/components/FilterSideBar'

export default function Home() {
  
  return (
    <main >
      <div>
      <Header />   
      <Hero />
      {/* <Filterbar /> */}
      <div className='product-body'>
        {/* <FilterSideBar /> */}
        <Products />
      </div>
      <Footer />
      </div>
    </main>
  )
}