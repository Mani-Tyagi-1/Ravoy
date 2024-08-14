import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const shop = () => {
    return (
      <div>
        <Navbar />

        <div className="min-w-screen h-[3101px]  ">
          <div
            className="min-w-screen h-[216px] "
            style={{
              backgroundImage:
                'url("https://s3-alpha-sig.figma.com/img/93dc/2adb/4541fb359e5329cd730f50fb90b0b604?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IJGj0haGUYq57VjslAf5cevDwbRjBsDG4AiDi3-hFjOBU-eJotgnD~zyJaX-Ow9UTosAVG~JWPud4zStK7Ekn2M75KfUu0QLNC-8xzbbzRzq0qNFOo7BzvNaB~waa1R9UPwrDPRARTsR0IcShUkSGVJTM9MIF3qkxosaz1XMFo0GXb6BS72lNLRLY77HgclKPszTtUwokRZRlXaN3woJUhf3eBhFBs6dY6y6xXVCaUwr-wtLMpPtUz21Q-gy9aXADf0EyvhcX~ii-Zp1uWUexOBrCCcUT7h3MgVYPAfepuxW8vG1gQm-05SqTPp8Hvt0EM61PBpZi7f1-1ggFPgy0w__")',
            }}
          ></div>

          <div className="w-full h-[63px] bg-[#FFF9F3] flex items-end   ">
            <div className="w-[201px] h-[40px]  flex justify-evenly items-center ">
              <p className="">SORT/POPULAR</p>
            </div>
            <div className="w-[10px] h-[14px] border-[1px]">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7.46154 11L15 1"
                  stroke="black"
                  stroke-opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default shop