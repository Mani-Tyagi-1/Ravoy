import React from 'react'
import logo from "../assets/svgviewer-png-output.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="h-[210px] min-w-screen">
      <div className="w-full h-[120px]  flex justify-evenly items-center ">
        <div className="logo w-203px h-65px hover:cursor-pointer">
          <Link to="/">
            <img src={logo} width={200} h={60} alt="logo" />
          </Link>
        </div>
        <div className="search w-[700px] h-[43px] flex justify-evenly items-center border-[1px] border-[#D1D1D1] rounded-[30px] p-4">
          <input
            type="text"
            className=" outline-none w-full h-full  placeholder:font-[12px] text-[#9C9C9C] p-4"
            placeholder="Login/Register"
          />
          <div className="w-[7px] h-[10px] cursor-pointer text-[#C5C2C2]">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L8 6.17241L1 11" stroke="#C5C2C2" />
            </svg>
          </div>
        </div>
        <div className="w-[218px] h-[25px] flex justify-evenly items-center">
          <div className="h-[16px] w-[16px] hover:cursor-pointer">
            <Link to="/contactUs">
            <img src="https://s3-alpha-sig.figma.com/img/e5d8/2f04/16f872b8023771b8b3f29c1581d120ad?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3NNhMK8qBG23OM-jo-JujRhT8KZVMxDl3zwElSePUkPnJui1FM6u6b25yRfIryz-PhRhcdmqxTGEH~8vvL1bL~imLVE2eFH8ds2I43XXkWyH-DabKk6QSz9--XtMaWEn6kVo5fTttI4MdcEbV8mFXVhLOciENQ8WbQek56lIy6ZVSjmJFbYxQo5Nm0M~gJgIH-8-yVXMiO2O8JWdLfH9fgh-7emQZ0l~s3JiH1bw1ReuBJ7gGhWqXHnX1s2Dl6hBbOIg6PL~vGO00t54yyngOtgefwElR62ETpDwjOjHGmXszSk5nGG3YMauKnJ3Hb4j2xsfikUosHanSuyzv0uuw__" />
            </Link>
          </div>
          <div className="w-[102px] h-[18px] text-[#9C9C9C] flex items-center hover:cursor-pointer ">
            <Link to="/login">Login/Register</Link>
          </div>
          <div className="w-[25px] h-[25px] hover:cursor-pointer">
            <img src="https://s3-alpha-sig.figma.com/img/46ab/29d3/d51eea5bc70c475e7ff4c4ab91625cf3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MutjdU9Y7MpTVE-54R0bQxQE4Gz9hD~p6h4MyLRr9RV-dPu7lGAvYFW3rZRp-RGJ58FYgGspQjm2AyH-iFVna9L8iIuI2APXVc36-Fu8qIcZhmdue4fMOQVdtV7dIQJVJ2rakB8x-s1m9F6yrXSLhjMukGn7pcOv~WDElTgKVKlqcHzX3j6~tc6g86~rgzBrL2J6EufOBR35-w48HFX26iruUP7zUbtf-QYleLCEEVfhFi4tlsxSWvNpgzvL3ycnkeRaNemH7cD7lsV3xR4RpH0cuFX4fSXe1HGYrrT4kYbGhKulgxWMZT7X-I2W8sisTuDtKvbuKf3-9wlfkfBnYQ__" />
          </div>
          <div className="w-[25px] h-[25px] hover:cursor-pointer ">
            <img src="https://s3-alpha-sig.figma.com/img/1cb3/092a/2923027b8ffff68d3b30321c9c185233?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gszKRApV88mgCFIqTSoT4-PRv5qicbZx1IUBrgR8~qXSqRnwE6H5hASye4ly-E2KGPkKqtgBMxjARJgY-71ZmVq8BSp0d2DKlyHRNE44C0sE5dppHYg92U4WSp94IpsSsqZXQv9iwlMuKus0cXMhGgtN4Wl8gLCnXlleUJluXbY7iJBKaW6k8FuxMlZNJ2c4PpKNEykRBxGkhE3qe7Y8VeNRCSO37BvImS5FPPBgA2AsoU4nAnhRnfVpNUn6m2MKn3rlhXu5LKb9jI~PLwiWEIBHpg3rSVsZZ3XF7aT6fDSEMcW49dvA~h0Eq-RbAS1QLt7IKPdt3WOMETvUHYlUVg__" />
          </div>
        </div>
      </div>
      <div className="w-full h-[97px] bg-[#FFF9F3E5] flex justify-center items-center text-center font-[Inter] font-[300]">
        <ul className="flex w-[80%] justify-evenly ">
          <Link to="/">
          <li className="font-[300] text-[15px] hover:text-[#0F6FA6] hover:underline hover: cursor-pointer ">
            HOME
          </li>
          </Link>
          <li className="flex justify-center items-center gap-2 font-[300] text-[15px] hover:text-[#0F6FA6] hover:underline hover: cursor-pointer ">
            ALL JEWELRY{" "}
            <div className="w-[7px] h-[10px] cursor-pointer text-[#0F6FA6]">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L6 7L11 1" stroke="#0F6FA6" />
              </svg>
            </div>
          </li>
          <li className="font-[300] text-[15px] hover:text-[#0F6FA6] hover:underline hover: cursor-pointer ">
            SHOPS
          </li>
          <li className="flex justify-center items-center gap-2 font-[300] text-[15px] hover:text-[#0F6FA6] hover:underline hover: cursor-pointer">
            GIFTS & OFFER{" "}
            <div className="w-[7px] h-[10px] cursor-pointer text-[#0F6FA6]">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L6 7L11 1" stroke="#0F6FA6" />
              </svg>
            </div>
          </li>
          <Link to="/about">
          <li className="font-[300] text-[15px] hover:text-[#0F6FA6] hover:underline hover: cursor-pointer">
            ABOUT US
          </li>
          </Link>
          <li className="font-[300] text-[15px] hover:text-[#0F6FA6] hover:underline hover: cursor-pointer">
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar