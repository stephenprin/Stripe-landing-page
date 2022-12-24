import React from 'react'
import { useGlobalContext } from '../context'
import phoneImg from '../assets/images/phone.svg'

const Hero = () => {
    const { closeSubmenu} = useGlobalContext()
    return (
        <section className='hero'>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>Financial infrastructure for the internet</h1>
                    <p>Millions of businesses of all sizes—from startups to
                        Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} alt='phone' className='phone-img' />
                </article>
            </div>
        </section>
  )
}

export default Hero