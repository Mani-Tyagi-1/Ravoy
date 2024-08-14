import React from "react";
import heroImg from "../assets/heroImg.jpeg";
import aboutBg from "../assets/aboutBg.png"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const about = () => {
  return (
    <div>
      <div className="h-[3708px] min-w-screen">
        <Navbar />
        <div
          className="min-w-screen h-[422px] "
          style={{
            backgroundImage: `url('${heroImg}')`,
          }}
        >
          <div className="w-full h-full font-[Montaga] font-[400] text-[85px] leading-[104px] flex justify-center items-center text-[#ffffff] pt-[120px]">
            About Us
          </div>
        </div>
        <div className="w-full h-[100px] flex justify-center items-center mt-[40px]">
          <div className="w-[1050px] h-[141px] flex text-center flex-col justify-center items-center ">
            <h2 className="w-[246px] h-[55px] font-[400] flex text-center text-[45px] font-[Montaga]">
              Our Mission
            </h2>
            <p className="w-[894px] h-[76px] font-[300] font-[Inter] text-center text-[#565656] text-[25px] leading-[38px] tracking-[2%]">
              To help create an Authentic & Transparent Jewelry experience at
              unbelievable prices, Just the way you want.
            </p>
          </div>
        </div>
        <div className="w-full h-[573px] bg-[#F4F7FC] flex mt-[4rem]">
          <div className="w-[730px] h-[555px] flex items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/051e/0b66/99701c9fd246bdb89679a82a5683f4c5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qhcsArzd-~3jslGhwyXSKK73YKv7jCt97w8Af3SdX8O0eC52~OeN3yM8RZPEOSvXxlZRrOh8QBbNXNAj~7M7afu9oPr0XizMoFjgXljtz18XwRrxXMMDzPWO2PkO-Dz2LQuiD-YmCqQDFrfK1KJnahtJZDVaVhvz2j3EhtqYs7gK3DMhd5LdO~khFp~zKNi5YxaAlJtjez15fvdUL4qgeCvo81Z7N67GKO4oI7SwpLK~587PvyEEUzZCgdAMTI8PaPVxnZ-bommCLgmE-AxV2MQlhm5fPldWp2aR6jW~jKJedBPxmDKqBqLKSrImTshT6nq2rfaSXzaLAjQTgniafQ__" />
          </div>
          <div className="h-[555px] flex text-center flex-col items-center justify-center">
            <h2 className="w-auto h-[55px] font-[400] flex text-center text-[45px] font-[Montaga]">
              Who Are We?
            </h2>
            <p className="w-[656px] h-[200px] font-[300]  text-center text-[#565656] text-[14px] leading-[35px] mt-4">
               We are a passionate team that loves understanding what the
              customer really wants & help them put their ideas into reality.
              Fiona Diamonds is the first & only brand in India to sell natural
              diamonds, lab grown diamonds & moissanites all under one roof. We
              believe that luxury should not come at the cost of the environment
              so when you choose to wear a jewelry piece, you make a statement
              that’s larger than a style statement.   
            </p>
            <div className="w-[302px] h-[96px] flex flex-col items-center ">
              <div
                className="w-[134px] h-[96px] z-20 "
                style={{ backgroundImage: `url('${aboutBg}')` }}
              ></div>
              <div className="w-[259px] h-[60px] border-[1px] border-[#000000] flex items-center justify-center bg-transparent z-0 ">
                <h3 className=" text-[14px]  text-[#7A7A7A] tracking-[0.3rem] leading-[85px] z-30">
                  GO TO SHOP KNOW
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[351px] bg-[#FFF9F3] flex justify-center items-center gap-5 ">
          <div className="w-[388px] h-[240px] border-[1px] border-[#000000/15] flex flex-col justify-center items-center gap-3 ">
            <div className="w-[50px] h-[50px] ">
              <img src="https://s3-alpha-sig.figma.com/img/e254/80b8/5de281a2cbd326c1108519583594bc3b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IF-vwhxxBf7SnpmH6I3QNgi~GL-NXGkubPtKPrkRfbWkY3UROrCEsrioY37ndsQ0VAtFRqEwBeddPgy8VcCkwRLGPE4OE45fV0L5JEnJP29skho4nmcPNR0wx5X92AO7z5aouvHpnx~skdLYjxki4GTGGiA7X8HFsOL0DuMOn8Pb~SBgBZ-WbKEZDqdN78pqSFh~RAM-vMHvopAIwdPNmBH6EGbwGtpoVrPjUlle6kC4Q0yVMnPXlpLgCZkwhKNcA~HxtBmOeFSqGaMuSkkmRXpBR96ehld6HABtvYv44x38sK~ArrJj1-aqfptsVCOdXC2RHZPCD929htrpOz2b5g__" />
            </div>
            <h3 className="w-auto h-[24px] font[300] text-[20px] leading-[24px] text-center text-[#626262]">
              Address
            </h3>
            <p className="w-[361px] h-[69px] font-[300] text-[14px] leading-[24px] tracking-[2%] text-center text-[#565656]">
              To help create an authentic & transparent jewelry experience at
              unbelievable prices, just the way you want.
            </p>
          </div>
          <div className="w-[388px] h-[240px] border-[1px] border-[#000000/15] flex flex-col justify-center items-center gap-3 ">
            <div className="w-[40px] h-[40px] ">
              <img src="https://s3-alpha-sig.figma.com/img/e6be/643d/4463065dd6b4da3ab11d94e06804e0d8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGeqOUiniFQc92ZvjOx~v6YIlLAG8m6kOUUmlDUN~Gr6JnHhoFbgdOne0wSwkBOobM20Icw4o~tGlJAIQcDeN0dqI5Xlb1uDtISAXwq4l0d6stACsPPPERONdLLBLMmPBYozetU31e3rdwZnqRUPzcL47RbYWB504-mXSTwhM2wTObmRq~kglVySO8VUaFyaRO6063thUNO0ki3rmPanBOm9il-z4H~ZF1a6-kMLQqMER0cLb6tqGXTzXkgcmsgWCFbuDyIHy4ENwhsQlau7xMrCVTntsMkSZNKZwbJXbP7of90~vVRMpEXmQWPzwS0YREJahUBoRgCB5rlraSkusg__" />
            </div>
            <h3 className="w-auto h-[24px] font[300] text-[20px] leading-[24px] text-center text-[#626262]">
              Contact Us
            </h3>
            <p className="w-[361px] h-[69px] font-[300] text-[14px] leading-[24px] tracking-[2%] text-center text-[#565656]">
              To help create an authentic & transparent jewelry experience at
              unbelievable prices, just the way you want.
            </p>
          </div>
          <div className="w-[388px] h-[240px] border-[1px] border-[#000000/15] flex flex-col justify-center items-center gap-3 ">
            <div className="w-[50px] h-[50px] ">
              <img src="https://s3-alpha-sig.figma.com/img/3dcf/e81b/86e4cc360ac7e0155cc743d6962a29fe?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HPhPDQqHBbGS8oJ0M97dNX1dgL5TMz1ibLFE7MKOPO17iu2KCL92CvIk8pOOUpX4KwYupNU2ZqEo2flzl0CNhTh9~kTgOskHRhn05zh2-Rfs2Rlf~V9GLp5f9rtGAgQYPMHnHMsVl1QtOJL-CC9lmkD~vT2uQ~gB1EyPhIq0RIcH7vqmcgUZdewKx0KQ-~c5kcJHPPfpDg~WD2YOCEXmDaMCiiYBzJ8Nthg-ipKHwitBboJRkzoOWsAlnH6jSI3SNqWP2asro5xID1NqcmiWj-WIfq3IUiZXKE-HN62jj1qfM~uoe7PznPRkSmRyeCOnbpEl78qm3-mTZMs7X7JlAg__" />
            </div>
            <h3 className="w-auto h-[24px] font[300] text-[20px] leading-[24px] text-center text-[#626262]">
              Hour of Operation
            </h3>
            <p className="w-[361px] h-[69px] font-[300] text-[14px] leading-[24px] tracking-[2%] text-center text-[#565656]">
              To help create an authentic & transparent jewelry experience at
              unbelievable prices, just the way you want.
            </p>
          </div>
        </div>

        <div className="w-full h-[573px] ">
          <div className="w-[1499px] h-[455px] flex flex-col items-center p-6 gap-5">
            <div className="w-[747px] h-[55px] flex justify-center items-center ">
              <h2 className="w-full font-[Montage] font-[400] text-[45px] leading-[55px] text-center text-[#000000]">
                How Can Ravoy Diamonds Help You?
              </h2>
            </div>
            <div className="flex justify-center items-center  p-5">
              <div className="w-[361px] h-full flex flex-col items-center justify-center gap-5">
                <h1 className="w-full h-[24px] font-[500] text-[20px] leading-[33px] tracking-[2%] text-center text-[#565656]">
                  Jewelry for every occasion
                </h1>
                <p className=" w-[300px] h-[130px] font-[300] text-[14px]  leading-[24px] tracking-[0.10rem] text-justify ">
                  Jewelry is an auspicious piece of ownership in India. At Fiona
                  Diamonds we have curated a collection of products suitable for
                  any of your occasions like, Diwali, Navratri & Akshay
                  Tritya.  
                </p>
              </div>
              <div className="w-[361px] h-full flex flex-col items-center justify-center gap-5">
                <h1 className="w-full h-[24px] font-[500] text-[20px] leading-[33px] tracking-[2%] text-center text-[#565656]">
                  Lab Grown Diamonds
                </h1>
                <p className=" w-[300px] h-[130px] font-[300] text-[14px]  leading-[24px] tracking-[0.10rem] text-justify ">
                  Diamonds at a fraction of their cost! Lab Grown Diamonds have
                  disrupted the jewelry industry with unbelievable prices. This
                  is a classic example of how leveraging technology can do
                  wonders.
                </p>
              </div>
              <div className="w-[361px] h-full flex flex-col items-center justify-center gap-5">
                <h1 className="w-full h-[24px] font-[500] text-[20px] leading-[33px] tracking-[2%] text-center text-[#565656]">
                  Gifting Jewelry
                </h1>
                <p className=" w-[300px] h-[130px] font-[300] text-[14px]  leading-[24px] tracking-[0.10rem] text-justify ">
                  Don't look any further for gifts! Whether it's valentine's day
                  or a milestone celebration, we will help you pick the perfect
                  gift for you according to your budget, style & preference.
                </p>
              </div>
              <div className="w-[361px] h-full flex flex-col items-center justify-center gap-5">
                <h1 className="w-full h-[24px] font-[500] text-[20px] leading-[33px] tracking-[2%] text-center text-[#565656]">
                  Customised Jewelry
                </h1>
                <p className=" w-[300px] h-[130px] font-[300] text-[14px]  leading-[24px] tracking-[0.10rem] text-justify ">
                  Every piece of jewelry is unique just like every individual.
                  Hence, we create your desired piece of jewelry, just the way
                  you want. We will convert your thoughts flawlessly into
                  reality.
                </p>
              </div>
            </div>
            <div className="w-[302px] h-[96px] flex flex-col items-center ">
              <div
                className="w-[134px] h-[96px] z-20 "
                style={{ backgroundImage: `url('${aboutBg}')` }}
              ></div>
              <div className="w-[259px] h-[60px] border-[1px] border-[#000000] flex items-center justify-center bg-transparent z-0 ">
                <h3 className=" text-[14px]  text-[#7A7A7A] tracking-[0.3rem] leading-[85px] z-30">
                  GO TO SHOP KNOW
                </h3>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default about;
