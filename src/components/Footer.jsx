import React from 'react'
import Carousel from "../components/CarosoulModel.jsx";
import arrow from "../assets/arrow.png";
import logo from "../assets/svgviewer-png-output.png";


const Footer = () => {

  const images = [
    "https://s3-alpha-sig.figma.com/img/bbf9/ec31/494b00e1346692c34e47b59d481370b6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C1HaVah5fy7SuByHAIfPqMyfJ~XgZaU7i0pfl9lIOe8b9xfOytP8Tk4ASjgoO3fQaMVit1MnfkgKJ0e4ZaRykcUSI8qHrlmvqKRVRbbuEUbJ6vk2i8VizXPOaWxjbpj63Xka3BYK-pVfLbdojlzDhYC3w3DKk40IQfSWm1ry1w15UV~xmZLl33sY4B65BaOOraZKTcosylTt1kCMImpQErZAtuw~U8M0D7sRH1TAR4VHEjw6erK5-ngzj2f~OXm4VFgCDobPxTvg0hMMq5cVTQPVmTiEiyNl6FbmpXc8k8VKNYjgM18jLhhR2skxCRAdBNjNjNuprQe0ivPfSEudyw__",
    "https://s3-alpha-sig.figma.com/img/8f79/52b3/3306f0841054984c40263aafb1f79296?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KL0ICp2aRqU9hDMu-qIIklpiTMZiN~1v-CZlqsdiQSsfjgR5ZZ-e8ojUrsO7Vcyezb~1vrOp6iTPWb-NkW9Imi7ZDexa2xzt5Om7SOVc-Eo7IRLjb3HBqmHlo9Kwpl2A4swRMkxr6dfBc2zTduoOOF~vnxZl31nVncpYpiUscznN89P6KrKCin1OV9CjaOqYNjpskwvXPZFzFqWc8qByPs4MrEZIuNpzXy1iGCGjb6fx8rBSwlUab1rMKKnooncZaZsW3oMpTZo2OpD~bKWhk8cdPdhKHRpXHsRR2JSFB~Rie0gvo~IJRR9rz-Nyy-KaCJN3ogNyFahW9SmRuMi2IA__",
    "https://s3-alpha-sig.figma.com/img/06ee/687f/01b9281b085f89c091eaaf7f9501cf78?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQsM27eQfERBv3RAOU416-mN6qdWciXmkjQZG2t71l37K6F~~NttjbBIpCQ9nQaXfFJRKHXMhKjWKRGPPKQPMsgrOfWBdAH1G~FtBlZsYSAhwUeVqh~pj2f3ERcZEJFos07VucxVXscU7EAF1nhPrfjcmdR6tjFCHWT6RFYzVrgRTXk0-OiksrZCmMS0GuJHvEYFFuXIzrnbWpXA8jh7lH0y6hfQlavddHTTZs1eScmdlz0gMoUwj~v8e6CJikVntmiyBVnOfE3HfMXpg6UdUZncFBdVjjiFTvrDYO2nNKQ-Kxa2IvEWYJP~6KG5YtASbxikezF89cYH0c14a6koDQ__",
    "https://s3-alpha-sig.figma.com/img/3e5e/ef03/bcae67830f96fe917fd41ecf387d4f3a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCXExcjXDWMcC6krXaNYRGdJfKqcWxc-T8xoYvKts29iqPvPL22TD4zfFjx9embcM5-bgxOgS6-1xAIYsZ8BRr6rSoprZK7BgAteSg6jhwLWfnUi9SNJSTd8YZd3-zsI-fAqXP0Qk-bmuAcpEv6BKQJonKO1sGLeDGGLlJPGi~b8etGAr2~23F6mNuEJjhrPN19pXSNW0fwDJ-QKbeHLnAv3SFWkryWQM3~WK9~JieWcL9u5AsaGZHz-tYjhUxpnrtRdtvs8hUg4SAteeCVgoNqPVrYMgApXq2tzYA1QeyYdq2NrcX5HmWgbNwkvQKxK27fSsGoj-g7FpgQ2QVvthw__",
    "https://s3-alpha-sig.figma.com/img/f25f/62b5/9b9d1eca1cba28ded0b4bf9368392783?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DwbaVRkjQWoWynS32JYlRynYWoER7IVjsVALF~vfcTFj4QYPfGrB1pYJL6SvmM-058wAexTVpqbRTtreBdQbeis0~cPzR1A5kVT0oI~zWjpRAjX1mG5u5BCZ1Hx4md-eiiSsL9G6SffNyXdV-g-Y~5uVcgtgWdSuNu87X1V47PW-fdspkaa7DExntoaqy8fL5GAoXbsPQJ4ie2fjybZgR5smz2zzU-aI4FmeE8-kWraqF~5eV139Op2EDqOm3qhzFEca9V2w9MIcQUVuTSnI8M17~yiXeJ9s2jQm2RcrMsTjogSuq9C~oE5p2odU3P4bgTDHF8GVQvKFsucJkuJerw__",
    "https://s3-alpha-sig.figma.com/img/f69c/08e9/8c337fc60031d0af2a24460b6b87798b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaf3vDBJpRmWkMxsGVP4zWpgUahz9ApoMriret4wCMwy1iPWlYEWiS6ShzD2aIasFzRd6paA5JZaouDJjH4KvLoaI~GQdGH~lxDfIYWKwaM6hccjvUE6oOI3MVSjGJZt0sZ2Szg~EVZzdqQUQft65M~4kXDg5FSHynqY77tz9Px1vzezW06OIApm37P9ow~vqNxWCalbNl1XqNoEDhfAeATackhSkh~AACSjYfJXQT6~QWeWgrdjZ8QJuQhTTk58rlAljO-~Jl-fSQymbykPkg7KEhn0pTYlaIQaXd6ldL1jjQm-r97x60iG4qmVOKt4uJ8~mi32mBPy9reFg4qRJw__",
  ];

  return (
    <div className="">
      <div className="w-full h-[796px] bg-[#FFF9F3]">
        <div className="w-full h-[521px] flex flex-col justify-center items-center gap-7">
          <div className="w-[449px] h-[55px] font-[Montage] font-[400] text-[45px] leading-[55px] text-center text-[#000000] ">
            {" "}
            Get Our Latest Update
          </div>
          <div className="w-[457px] h-[50px] font-[Inter] font-[300] text-[15px] leading-[25px] text-center text-[#5C5C5C] ">
            {" "}
            Sign up to our newsletter for information on sale, delightful
            content and new additions to the collection.
          </div>
          <div className="w-[669px] h-[60px] flex border-[1px] border-[#BFBFBF] bg-[#FFF9F3]">
            <input
              className="w-[669px] h-[55px] bg-inherit outline-none placeholder:text-[13px] placeholder:leading-[25px] placeholder:text-[#5C5C5C]  placeholder:text-left  px-5"
              placeholder="Enter your Email"
            />
            <div className="flex items-center px-8 gap-2 ">
              <img className="w-[20px] h-[20px] " src={arrow} />
              <div className="font-[Inter]   text-[16px] font-bold leading-[35px] text-center text-[#393939] ">
                Subscribe
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <div className="font-[Inter] text-[14px] font-[600] leading-[25px] text-center text-[#5C5C5C] ">
              I Agree to the privacy policy
            </div>
          </div>
        </div>

        <Carousel images={images} slidesToShow={3} />
        
      </div>
      <div className="w-full h-[360px] bg-[#FFF9F3] flex items-center justify-center ">
        <div className="w-[297px] h-[150px]   ">
          <img src={logo} width={200} h={60} alt="LOGO" />
          <p className="w-[297px] h-[63px] font-[500] font-[Montserrat] text-[13px] leading-[21px] tracking-[0.25rem] text-[#7D7D7D] ">
            Let the Shining fingers do the talking. Antique Diamond ring for all
            occasion.
          </p>
        </div>
        <div className="w-[297px] h-[150px]  flex flex-col gap-3">
          <h1 className="w-[297px] h-[18px] font-[500] font-[Montserrat] text-[15px] leading-[18px] text-center text-black hover:underline">
            {" "}
            Shopping Online{" "}
          </h1>
          <ul className="w-[297px] flex flex-col gap-1">
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Jewellery Materials
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Sizing Childeren's Jewellery
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Delivery Return
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Order Tracking
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              FAQs
            </li>
          </ul>
        </div>
        <div className="w-[297px] h-[150px]  flex flex-col gap-3">
          <h1 className="w-[297px] h-[18px] font-[500] font-[Montserrat] text-[15px] leading-[18px] text-center text-black hover:underline ">
            {" "}
            About Us{" "}
          </h1>
          <ul className="w-[297px] flex flex-col gap-1">
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Our Story
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Gifts Wrap
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Engraving
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Jewellery Care
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              More
            </li>
          </ul>
        </div>
        <div className="w-[297px] h-[150px]  flex flex-col gap-3">
          <h1 className="w-[297px] h-[18px] font-[500] font-[Montserrat] text-[15px] leading-[18px] text-center text-black ">
            {" "}
            Account{" "}
          </h1>
          <ul className="w-[297px] flex flex-col gap-2 hover:underline">
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline mb-4">
              Head Office : SCF 55 Sector 8 <br /> Panchkula. Haryana, 134109.
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Tel: 01234567899
            </li>
            <li className="w-[297px] h-[16px] font-[500] font-[Montserrat] text-[13px] leading-[15px] text-center text-[#6E6E6E] hover:underline">
              Email: sample @123.com
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] flex items-center justify-center">
        <div className="w-[1332px] h-[1px]  border-[1px] border-[#A5A5A5]"></div>
      </div>
      <div className="footer w-full h-[18px] font-[500] font-[Monsterrat] text-[12px] leading-[14px] text-[#6B6B6B] flex items-center justify-center p-14">
        Copyright@2023 Ravoy Diamonds. All Right Reserved.
      </div>
    </div>
  );
}

export default Footer