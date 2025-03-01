import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

import React from 'react'


const Home = () => {
  const loggedIn = { firstName : 'Tarang' , lastName : 'Bhargava' , email : 'dhknhk07@gmail.com'};
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
          RECENT TRANSACTIONS
        </div>  
        <RightSidebar
        user= {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 12345.67}, {currentBalance: 6969.67}]}
        />
      </section>
    </div>
  )
}

export default Home
