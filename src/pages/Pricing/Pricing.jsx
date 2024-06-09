import React from 'react'
import crypto_image from '../../assets/crypto_analysis.svg'
import './Pricing.css'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div className="pricing">
        <div className='pricing-overview'>
                <div className='image-div'>
                    <img src={crypto_image} alt="" />
                </div>
                <div className='pricing-info'>
                    <h1>Level up your crypto journey - Go Ad-Free with <span>CryptoAdda Premium</span>.</h1>
                    <p>As low as $10 a month. Subscribe today.</p>
                    <a href="#pricing-cards"><button>Upgrade to Premium</button></a>
                </div>
        </div>

        <div className="pricing-plans" id='pricing-cards'>
            <h2>Select your preferred plan</h2>

            <div className="pricing-tab">
                <div className="pricing-container">
                    <h3>Free</h3>
                    <p>Start your crypto journey at no cost.</p>
                    <h4>$0 &nbsp;&nbsp;<span>/ month</span></h4>
                    <li><i class="bi bi-check-lg"></i>Access to basic features</li>
                    <li><i class="bi bi-check-lg"></i>Daily market analysis</li>
                    <li><i class="bi bi-check-lg"></i>Email support</li>
                
                    <li className='not-include'><i class="bi bi-x-lg"></i>24/7 dedicated support</li>
                    <li className='not-include'><i class="bi bi-x-lg"></i>Personalized market insights</li>
                    <li className='not-include'><i class="bi bi-x-lg"></i>Exclusive webinars and tutorials</li>
                    <Link to='/signup'><button>Signup to Start</button></Link>
                </div>

                <div className="pricing-container pricing-container-2">
                    <h3>Professional Plan</h3>
                    <p>Unlock advanced insights and go ad-free.</p>
                    <h4>$10 &nbsp;&nbsp;<span>/ month</span></h4>
                    <li><i class="bi bi-check-lg"></i>Everything in Free Plan</li>
                    <li><i class="bi bi-check-lg"></i>Ad-free experience</li>
                    <li><i class="bi bi-check-lg"></i>24/7 dedicated support</li>
                    <li><i class="bi bi-check-lg"></i>Analysis crypto with AI</li>
                    <li className='not-include'><i class="bi bi-x-lg"></i>Personalized market insights</li>
                    <li className='not-include'><i class="bi bi-x-lg"></i>Exclusive webinars and tutorials</li>
                    <button>Upgrade Plan</button>

                    <div className='upgrade-plan-tooltip'><i class="bi bi-heart-fill"></i> Most Popular Plan</div>
                </div>


                <div className="pricing-container">
                    <h3>Master Plan</h3>
                    <p>Get personalized support and exclusive content.</p>
                    <h4>$20 &nbsp;&nbsp;<span>/ month</span></h4>
                    <li><i class="bi bi-check-lg"></i>Everything in Professional Plan</li>
                    <li><i class="bi bi-check-lg"></i>Advance market analysis</li>
                    <li><i class="bi bi-check-lg"></i>Learn from market leaders</li>
                    <li><i class="bi bi-check-lg"></i>Analysis crypto with AI</li>
                    <li><i class="bi bi-check-lg"></i>Personalized market insights</li>
                    <li><i class="bi bi-check-lg"></i>Exclusive webinars and tutorials</li>

                    <button>Upgrade Plan</button>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default Pricing