import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

import React from 'react'


const Home = () => {
  const loggedIn = { firstName : 'Tarang'};
  return (
    <div>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
          <HeaderBox
            type= "greeting"
            title = "Welcome"
            user= {loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions efficiently."
            />
          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {2}
            totalCurrentBalance = {1234567}
            
            />
          </header>
        </div>  
      </section>
    </div>
  )
}

export default Home
