import React from 'react'
import Navbar from '../components/Navbar'
import MealFinder from '../components/MealFinder'
import SearchBar from '../components/SearchBar'
import FeatureCards from '../components/FeatureCards'
import CookingBanner from '../components/Cookingbanner'
import CookingProfile from '../components/CookingProfile'
import Community from '../components/Community'
import FAQSection from '../components/FAQSection'
import GuestBanner from '../components/GuestBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <MealFinder/>
      <SearchBar/>
      <FeatureCards/>
      <CookingBanner/>
      <CookingProfile/>
      <Community/>
      <FAQSection/>
      <GuestBanner/>
      <Footer/>

    </div>
  )
}

export default Home
