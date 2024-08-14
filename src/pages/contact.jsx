import React from 'react'
import Navbar from '../components/Navbar'
import contactUs from "../assets/contactUs.jpeg";
import logo from "../assets/svgviewer-png-output.png";
import heroImg from "../assets/heroImg.jpeg";
import aboutBg from "../assets/aboutBg.png";
import arrow from "../assets/arrow.png";
import Carousel from "../components/CarosoulModel.jsx";
import Footer from '../components/Footer.jsx';


const contact = () => {
  return (
    <div className="">
      <Navbar />

      <div
        className="min-w-screen h-[422px] "
        style={{
          backgroundImage: `url('${contactUs}')`,
        }}
      >
        <div className="w-full h-full font-[Montaga] font-[400] text-[85px] leading-[104px] flex justify-center items-center text-[#ffffff] pt-[120px]">
          Contact Us
        </div>
      </div>

      <div className="w-full h-[140px] bg-[#FFF9F3] flex justify-center items-center">
        <p className="font-[Montaga] text-[35px] font-[400] leading-[43px] text-center text-[#3093CB] ">
          Let the Shining fingers do the talking. Antique Diamond ring for all
          occasion.
        </p>
      </div>

      <div
        className="w-full h-[642px] flex flex-col justify-center items-center border bg-opacity-[87%]"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1d54/228a/6672f463ccc07290b906dd463e9bc186?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FyC~y-rsXh9Wpt7bHOf01-YAsJzXYobAR1fmVxwZa~DzvC~kLK0uumBPAJf33zazmtLgN~qbC~tQJv5Uv5yr8ON6NEH2F6d8ae-VaFJ3gfCrMI9iHaTLMaC6q8ctE8a51QVK2RRzS4t9Ka45M3QJU9dbvjaO6QiSJPZxEYzyzRtdyXRpxANlhzhn2McIgWQI2-nfQJaVb3PiomVkEoutB0uaxHpZDFQpiXNy9kN0caw4auFt1Rh8cLoCkdt0n9-RmA0y3hh71gJyTQA0d3nQ5LTo1ZhsFNED89isESLieOHLoSm6UcWm8ClIZ7qDq~Y-u-CaVUEOAGyanICdMxRX6w__')`,
        }}
      >
        <div className="w-[431px] h-[77px] font-[Inter] font-[300] text-18px leading-[28px] text-center tracking-wide text-black ">
          To help create an authentic & transparent jewelry experience at
          unbelievable prices, just the way you want.
        </div>
        <div className="w-[499px] h-[410px] rounded-[10px] border-[10px] bg-white border-[#2993B533] flex flex-col justify-center items-center gap-2   ">
          <div className="w-[50px] h-[45px]  ">
            <img src="https://s3-alpha-sig.figma.com/img/e254/80b8/5de281a2cbd326c1108519583594bc3b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IF-vwhxxBf7SnpmH6I3QNgi~GL-NXGkubPtKPrkRfbWkY3UROrCEsrioY37ndsQ0VAtFRqEwBeddPgy8VcCkwRLGPE4OE45fV0L5JEnJP29skho4nmcPNR0wx5X92AO7z5aouvHpnx~skdLYjxki4GTGGiA7X8HFsOL0DuMOn8Pb~SBgBZ-WbKEZDqdN78pqSFh~RAM-vMHvopAIwdPNmBH6EGbwGtpoVrPjUlle6kC4Q0yVMnPXlpLgCZkwhKNcA~HxtBmOeFSqGaMuSkkmRXpBR96ehld6HABtvYv44x38sK~ArrJj1-aqfptsVCOdXC2RHZPCD929htrpOz2b5g__" />
          </div>

          <div className="w-[332px] h-[68px] font-[Inter] font-[300] text-[30px] leading-[38px] text-center text-[#565656] mb-[20px] ">
            SCF - 55, Sector - 8, Panchkula Haryana
          </div>
          <div className="w-[223px] h-[21px] font-[Inter] font-[300] text-[18px] leading-[23px] text-center text-[#565656]">
            For more info:
          </div>
          <div className="w-[223px] h-[31px] font-[Inter] font-[300] text-[30px] leading-[23px] text-center text-[#565656]">
            981 519 6789
          </div>
          <div className="w-[223px] h-[21px] font-[Montserrat] font-[500] text-[13px] leading-[15px] text-center text-[#6E6E6E]">
            Email: sample @123.com
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default contact