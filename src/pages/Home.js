import React from 'react';
import img1 from "./home images/homeimg1.jpg"
import  img2 from "./home images/homeimg2.jpg";
import  img3 from "./home images/homeimg3.jpg";
import  img4 from "./home images/homeimg4.jpg";
import './home.css';

const Home = () => {
  return (
         <div className='homepage'>
             <table>
        <tr>
          <td colSpan={4}>
            <center>
              <h2>Welcome to Junk it Out!</h2>
              <p>
              At Junk it Out!, we're on a mission to revolutionize waste management and promote a sustainable future. Our innovative platform allows users to conveniently dispose of various types of waste—plastic, paper, e-waste, clothes, and wood—from the comfort of their homes. Our dedicated delivery agents ensure hassle-free collection directly from your doorstep.
              </p>
            </center>
          </td>
          <td></td>
          <td>
            <img alt="img" src={img1} height="70%" width="70%"></img>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <img alt="img" src={img2} height="70%" width="70%"></img>
          </td>
          <td></td>
          <td>
            <center>
              <h2>Earn Rewards for a Greener Tomorrow</h2>
              <p>
              Participate in our eco-friendly initiative and be rewarded for your commitment to the environment. For every contribution you make, you earn valuable coins that accumulate in your account. These coins can be redeemed for a diverse range of recycled products available on our website. It's not just waste disposal; it's a step towards creating a circular economy that benefits both you and the planet.
              </p>
            </center>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <center>
              <h2>Transform Your Waste into new product</h2>
              <p>
              Sorting and disposing of waste has never been more rewarding. Your conscientious efforts not only contribute to cleaner streets but also earn you coins that hold the key to a sustainable lifestyle. Join us in the journey of converting waste into wealth, making every discarded item an opportunity for positive change.
              </p>
            </center>
          </td>
          <td></td>
          <td>
            <img alt="img" src={img4} height="70%" width="70%"></img>
          </td>
        </tr> 
        <tr>
          <td colSpan={4}>
            <img alt="img" src={img3} height="70%" width="70%"></img>
          </td>
          <td></td>
          <td>
            <center>
              <h2>Shop Smart, Shop Recycled</h2>
              <p>
              Once you've amassed a sufficient number of coins, explore our website's curated collection of recycled products. From everyday essentials to unique finds, each item tells a story of sustainability. Embrace eco-friendly living by redeeming your coins and choosing recycled products that not only meet your needs but also make a positive impact on the environment. Shop smart, shop recycled with Junk it Out!              </p>
            </center>
          </td>
        </tr>
      </table>
        </div>

  );
};

export default Home;
