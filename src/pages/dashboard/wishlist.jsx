import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const wishlist = () => {
  return (
    <div className="min-w-screen h-[4200px]">
      <Navbar />

      <div className="flex ">
        <div className="sidebar w-[340px] h-[873px] rounded-[10px] bg-[#FFF9F3] border mt-10 ml-[44px] ">
          <div className="w-[366px] h-[25px]">
            <h3 className=" font-[Montaga] font-[400] text-[26px] text-center mt-9 ">
              MY ACCOUNT
            </h3>
          </div>

          <div className=" mt-20 ml-8">
            <ul>
              <li className="hover:cursor-pointer hover:text-[#2993B5] text-[#7D7D7D] my-3 ">
                <Link to="/dashboard-overview">
                  <h3 className="font-[Inter] font-[500] text-[20px] ">
                    OVERVIEW
                  </h3>
                </Link>
              </li>
              <div className="w-[270px] border-[1px]  "></div>
              <li className="hover:cursor-pointer hover:text-[#2993B5] text-[#7D7D7D] my-3 ">
                <Link to="/dashboard-adressbook">
                  <h3 className="font-[Inter] font-[500] text-[20px] ">
                    ADDRESS BOOK
                  </h3>
                </Link>
              </li>
              <div className="w-[270px] border-[1px]  "></div>
              <li className="hover:cursor-pointer hover:text-[#2993B5] text-[#7D7D7D] my-3 ">
                <h3 className="font-[Inter] font-[500] text-[20px]  ">
                  TRACK ORDER
                </h3>
              </li>
              <div className="w-[270px] border-[1px]  "></div>

              <li className="hover:cursor-pointer hover:text-[#2993B5] text-[#7D7D7D] my-3">
                <li className="hover:cursor-pointer flex  items-center hover:text-[#2993B5] text-[#2993B5] my-3">
                  <Link to="/dashboard-wishlist">
                    <h3 className="font-[Inter] font-[500] text-[20px] mr-2 ">
                      WISHLIST
                    </h3>
                  </Link>
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z"
                      fill="#15A4D2"
                    />
                  </svg>
                </li>
              </li>
              <div className="w-[270px] border-[1px]  "></div>

              <li className="hover:cursor-pointer hover:text-[#2993B5] text-[#7D7D7D] my-3 ">
                <h3 className="font-[Inter] font-[500] text-[20px]  ">
                  ORDER HISTORY
                </h3>
              </li>
              <div className="w-[270px] border-[1px]  "></div>

              <li className="hover:cursor-pointer hover:text-[#2993B5] text-[#7D7D7D] my-3 ">
                <h3 className="font-[Inter] font-[500] text-[20px]  ">
                  LOG OUT
                </h3>
              </li>
              <div className="w-[270px] border-[1px]  "></div>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col ">
          <div className="w-[1083px] h-[875px] rounded-[10px] mt-10 mx-[25px] bg-[#FFF9F3] flex flex-col   ">
            <div className="w-full p-10 flex justify-between  ">
              <h1 className="w-[287px] h-[25px] font-[Montserrat] font-[400] text-[24px] text-[#424242] mb-10 ">
                {" "}
                WISHLIST
              </h1>
              <div className="w-[116px] h-[25px] rounded-[10px] bg-[#C3E6F5] font-[Inter] font-[600] text-[13px] text-[#5C5C5C] flex items-center justify-center hover:cursor-pointer p-2">
                SHARE
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <div className="relative">
                <div className="w-[338px] h-[396px] border-[1px] bg-white ">
                  <img src="https://s3-alpha-sig.figma.com/img/939a/c3d1/175554a17896afd7a9fe4a929bc413cf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RHaG1GzOaZnlY~~JBp2~fh8htM5oHiaK26rM-9xdwLII-wuizojfHrbIU9lsEWGu4AKYtC50pZMJ2n0b8dfzHxcvuqos7A29xr-MUvEkcHZG5CCFAKntdzg9D~GXslF1EUEPqWEyzOXcyrHG5Pqy~1kifacBogt20aG-12lKem-qjcZyb~cs5NUdb8CFfNP0Zy8OwUVmjeFhi4eGhGL~PFIWixv4eleHLxN9NpedDMTKcFRi9hRX5Q5gZsq8uE8I0QVOuTPn0R2Bt~7IK4FUxHHtCFXcraGorLP2M7CtIY9AHu9XHyeiCHrf4jSOFDTESEVlM8MjHqgF~hm3gKIgJw__" />
                  <div className="delete-icon absolute top-[10px] right-[10px] w-[15px] h-[15px] hover:cursor-pointer">
                    <img src="https://s3-alpha-sig.figma.com/img/9fd6/851e/daccdcc157fa4d50326b3b185512b0d5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPlAyZ79WgOuAcFJqnLJKIyQDFPSl49rk4TJ9GTplWuWGoV6bh1Ssvyh4YxyMefzgg9yFoBPC4oR4OvQnArv~Q7YHfQclmLS2nwwK8ZsBKET3lqtoE~JnqV89rxARoYD9SvplFfNNYGLaNnZGugv4Pij3wwCCow2ZnVWU8fVwEAjs10fPiEXIrIzTD40qBxVez-8X-Vd1Dh5Iai5wGWRtZ9g1OsEgFBt9V~mFryqBuWulaHXRH8OLECJst4qfDTW62EvVfsZDQs~UpTIOFw0LzT~Wpe-cSssiMO1o6lAalolrtfuTK8LbbVNJ6HS90A1nyt65BPG15ZzqmQLx10eDA__" />
                  </div>
                </div>

                <div className="w-[338px] h-[396px] flex flex-col items-center">
                  <h2 className="font-[Montaga] font-[400] text-[18px] text-center text-black ">
                    RING DIAMOND
                  </h2>
                  <h1 className="font-[Monserrat] font-[400] text-[20px] text-center text-[#4C4C4C] ">
                    $250.00
                  </h1>
                  <p className="font-[Montserrat] font-[500] text-[13px] text-center text-[#FC2F2F] ">
                    {" "}
                    Only one left in stock
                  </p>

                  <div className="w-[263px] h-[90px] mt-3 flex flex-col items-center relative ">
                    <div className="h-full w-[120px]  ">
                      <img src="https://s3-alpha-sig.figma.com/img/5f5e/b394/843282f33350ed1e0603043d81f1a532?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKF29Yr4D3FjunsqgtBX78LVlEREylzyJmVusBz6TCFWGq340AlKrgDTgUSGbuhjSzvzejJPMUvNwRarSANsMiAl8pvHX9TzCAWrkhP-8Q6mw6vwe4DCdQVmdG0osKj4cK92egW-yMHDXNM55gQSWRmKNrwKgYxlhaZunhhaUN0xy-QAxAlELigs~vXcd7qeMDGIZFmVQPWjrknNWc0OUs6TzIWqWZQAOTH~duUBoJRQsQ-D6l7CSZITtdGAyupYrwZ9ZW8ndFDHZvkx37dRAeM2UixmlgvZuPrFHYCUdW476VS9OeI11s3mVmhZlAN9XjgUKrGUCLDT2dqmoK1yOQ__" />
                    </div>
                    <div className="w-full h-[52px] border-[1px] border-[#767676] absolute top-5">
                      <h2 className="w-full h-full font-[Inter] font-[400] text-[20px] text-center text-[#767676] flex justify-center items-center tracking-[4px] ">
                        Move to Cart
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-[338px] h-[396px] border-[1px] bg-white ">
                  <img src="https://s3-alpha-sig.figma.com/img/fb25/64bb/c5fbb32c7d7c56fdeadbfc4fc027343b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T4~R7v~kRxO9u1k2JJl9EtEms2mGqcgP5~vybNaCE-heu6nkZBxvKitsaiXq0TDGBUDFczbQQTRDPJCew5wTnFy0AFmJWuRQ-T72n8ot5SiPdEn0EqohHv99Ec0h3TXVK1fLthkMDMtu4fzJ-60UiFqL4i1lvt5DwmJOLHoplgU9n2-syT5Azw8dGFMPhLY~Pce4m4V5yeFMx2IYNuWmDiG-l-IR6pS~SlKjUM8BAkmdeUHLCGSQqnFVeRLF-cn~hr1zphDpdtulihwSlFMgGhXLjzZR6iYkgA-JAvxaXtcZ2lRZJGBVoBDP3gijEVneXKJaULG2LI9zfzfTwnPJ8A__" />
                  <div className="delete-icon absolute top-[10px] right-[10px] w-[15px] h-[15px] hover:cursor-pointer">
                    <img src="https://s3-alpha-sig.figma.com/img/9fd6/851e/daccdcc157fa4d50326b3b185512b0d5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPlAyZ79WgOuAcFJqnLJKIyQDFPSl49rk4TJ9GTplWuWGoV6bh1Ssvyh4YxyMefzgg9yFoBPC4oR4OvQnArv~Q7YHfQclmLS2nwwK8ZsBKET3lqtoE~JnqV89rxARoYD9SvplFfNNYGLaNnZGugv4Pij3wwCCow2ZnVWU8fVwEAjs10fPiEXIrIzTD40qBxVez-8X-Vd1Dh5Iai5wGWRtZ9g1OsEgFBt9V~mFryqBuWulaHXRH8OLECJst4qfDTW62EvVfsZDQs~UpTIOFw0LzT~Wpe-cSssiMO1o6lAalolrtfuTK8LbbVNJ6HS90A1nyt65BPG15ZzqmQLx10eDA__" />
                  </div>
                </div>

                <div className="w-[338px] h-[396px] flex flex-col items-center">
                  <h2 className="font-[Montaga] font-[400] text-[18px] text-center text-black ">
                    MEDIOCRE LEATHER HAT
                  </h2>
                  <h1 className="font-[Monserrat] font-[400] text-[20px] text-center text-[#4C4C4C] ">
                    $250.00
                  </h1>
                  <p className="font-[Montserrat] font-[500] text-[13px] text-center text-[#FC2F2F] ">
                    {" "}
                    Only one left in stock
                  </p>

                  <div className="w-[263px] h-[90px] mt-3 flex flex-col items-center relative ">
                    <div className="h-full w-[120px]  ">
                      <img src="https://s3-alpha-sig.figma.com/img/5f5e/b394/843282f33350ed1e0603043d81f1a532?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKF29Yr4D3FjunsqgtBX78LVlEREylzyJmVusBz6TCFWGq340AlKrgDTgUSGbuhjSzvzejJPMUvNwRarSANsMiAl8pvHX9TzCAWrkhP-8Q6mw6vwe4DCdQVmdG0osKj4cK92egW-yMHDXNM55gQSWRmKNrwKgYxlhaZunhhaUN0xy-QAxAlELigs~vXcd7qeMDGIZFmVQPWjrknNWc0OUs6TzIWqWZQAOTH~duUBoJRQsQ-D6l7CSZITtdGAyupYrwZ9ZW8ndFDHZvkx37dRAeM2UixmlgvZuPrFHYCUdW476VS9OeI11s3mVmhZlAN9XjgUKrGUCLDT2dqmoK1yOQ__" />
                    </div>
                    <div className="w-full h-[52px] border-[1px] border-[#767676] absolute top-5">
                      <h2 className="w-full h-full font-[Inter] font-[400] text-[20px] text-center text-[#767676] flex justify-center items-center tracking-[4px] ">
                        Move to Cart
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-[338px] h-[396px] border-[1px] bg-white  ">
                  <img src="https://s3-alpha-sig.figma.com/img/3388/c10d/1b52b00a60967a560036a9b8e76cb52c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jF2FrHUnQ7zzu0Hz6iPmqHkSSN1Gsfw4BGpg9NzGNGZjwzP-qaqI~K148AoCLxom0kC~Xdw6Eq7naeMrBvosjoEc6hXDfoJlqLBVoPFjZg00riK2wtkG0DkXyPBgaai5BPP-PJTvHADsnkTSSAt60OjpHOCjhOVZwMqqIlTEixqqHuG0NlipNfTOkGeMqd~SAJy9OERlAws-pb0snXI4gCcUFwq~3sy~BwFkGaFpvGQFGv15bP3qwh67w65nFrjy8QTxYaVLnKbSLEUjSrDcLwIfh6Q7HQSXRGxKpDvMZqEBX~2K1SQyuQr5WYsEKipZF8r9wRQi4L2hWqEY5G6khg__" />
                  <div className="delete-icon absolute top-[10px] right-[10px] w-[15px] h-[15px] hover:cursor-pointer">
                    <img src="https://s3-alpha-sig.figma.com/img/9fd6/851e/daccdcc157fa4d50326b3b185512b0d5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPlAyZ79WgOuAcFJqnLJKIyQDFPSl49rk4TJ9GTplWuWGoV6bh1Ssvyh4YxyMefzgg9yFoBPC4oR4OvQnArv~Q7YHfQclmLS2nwwK8ZsBKET3lqtoE~JnqV89rxARoYD9SvplFfNNYGLaNnZGugv4Pij3wwCCow2ZnVWU8fVwEAjs10fPiEXIrIzTD40qBxVez-8X-Vd1Dh5Iai5wGWRtZ9g1OsEgFBt9V~mFryqBuWulaHXRH8OLECJst4qfDTW62EvVfsZDQs~UpTIOFw0LzT~Wpe-cSssiMO1o6lAalolrtfuTK8LbbVNJ6HS90A1nyt65BPG15ZzqmQLx10eDA__" />
                  </div>
                </div>

                <div className="w-[338px] h-[396px] flex flex-col items-center">
                  <h2 className="font-[Montaga] font-[400] text-[18px] text-center text-black ">
                    DIAMOND BRACELET
                  </h2>
                  <h1 className="font-[Monserrat] font-[400] text-[20px] text-center text-[#4C4C4C] ">
                    $250.00
                  </h1>
                  <p className="font-[Montserrat] font-[500] text-[13px] text-center text-[#FC2F2F] ">
                    {" "}
                    Only one left in stock
                  </p>

                  <div className="w-[263px] h-[90px] mt-3 flex flex-col items-center relative ">
                    <div className="h-full w-[120px]  ">
                      <img src="https://s3-alpha-sig.figma.com/img/5f5e/b394/843282f33350ed1e0603043d81f1a532?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKF29Yr4D3FjunsqgtBX78LVlEREylzyJmVusBz6TCFWGq340AlKrgDTgUSGbuhjSzvzejJPMUvNwRarSANsMiAl8pvHX9TzCAWrkhP-8Q6mw6vwe4DCdQVmdG0osKj4cK92egW-yMHDXNM55gQSWRmKNrwKgYxlhaZunhhaUN0xy-QAxAlELigs~vXcd7qeMDGIZFmVQPWjrknNWc0OUs6TzIWqWZQAOTH~duUBoJRQsQ-D6l7CSZITtdGAyupYrwZ9ZW8ndFDHZvkx37dRAeM2UixmlgvZuPrFHYCUdW476VS9OeI11s3mVmhZlAN9XjgUKrGUCLDT2dqmoK1yOQ__" />
                    </div>
                    <div className="w-full h-[52px] border-[1px] border-[#767676] absolute top-5">
                      <h2 className="w-full h-full font-[Inter] font-[400] text-[20px] text-center text-[#767676] flex justify-center items-center tracking-[4px] ">
                        Move to Cart
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-screen h-[697px] flex flex-col justify-center items-center mt-[100px] ">
        <p className="w-[270px] h-[19px] font-[Inter] font-[500] text-[16px] tracking-wide text-center leading-[19px] text-[#2993B5] ">
          GET READY TO SPARKLE
        </p>
        <h1 className="w-[409px] h-[55px] font-[Montaga] font-[400] text-[45px] leading-[55px] text-center text-black  ">
          Jewellery Collection
        </h1>
        <div className="flex gap-2 mt-8">
          <div className="w-[355px] h-[560px] border relative  ">
            <img
              src="https://s3-alpha-sig.figma.com/img/9319/5ac5/54ab526bc69924dea3a2bfcd20a2eb76?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3a9QG3vrkv8cz4z5VtwMlbkJFMCfYcweUSyG1ZQhJaC963o-wHEdiQmmppUbWidcDD3rNRWrfmp47lZwWJZSVOQchx17fFeCuR13yQ66zWVZJLI3U2m5hDxA89JKEuPdUO2dYsDZQiZg16f9tR8YRJA7pBZdNr3GDNFu6LJlVDZmha9bCE~0FKV6gZgv-iE~Lu5Ga3vmqBMch1d~p2EoQ32llbKkqXnvBfQwq2GFLsPJEl2xWtmVzdAwzDslmWxWPWdiCGw4dxWkU8fL9m6kag1TGb-TpN5IwoHl9uBwo0dUyCtQTNQQDRgtWbIJIJHCD6nvram8rjdqFNZZlnpCA__"
              className="w-full h-full "
            />
            <div className="absolute bottom-[40px] left-[142px] font-[Montaga] font-[400] text-[30px] text-center text-white ">
              Earrings
            </div>
          </div>
          <div className="w-[355px] h-[560px] border relative ">
            <img
              src="https://s3-alpha-sig.figma.com/img/ffd0/e570/263c6af2551c5ac748c4ba9d1341f734?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQIHJkqyjL7jasMAu3sfG~kDivq-A8o4fI0YoAjB7M1-Gyq0YoslT6CvsLCuKjfUqkCi6QkFTJP56rHK0Q0wvfQSz8lkU53XhbfJ4c9b8l4IJqN63iqbd5~yCyPdzhyn8l2rKncz9vp5uW1Xd2EX~SHwz2U~L4mYaJq3R0n8vTihilppx7XJEKeQy64dnJo1krYO-ipWGnFqoSbGr3ZT6aZf4Oj5oqadtapN0OimfJlF-9ppFYuxz~8weZX7ckaDnmn3Z05TSCyixrSu43ckuk5YhYyW-RXOTJ0EPL1Hlg4W4lFtbcOft3PaLbl66cYvtJgg2rAHmBHnFyrF3EiO8w__"
              className="w-full h-full"
            />
            <div className="absolute bottom-[40px] left-[142px] font-[Montaga] font-[400] text-[30px] text-center text-white ">
              Necklaces
            </div>
          </div>
          <div className="w-[355px] h-[560px] border relative ">
            <img
              src="https://s3-alpha-sig.figma.com/img/7605/4680/528e8077f9e69f91f95a9f353ffafe0b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O69K31OE~tkCTpI2m7wWnr2E5ORzTWJGEmE7OGCTxFHrJ~Z10ihCNal1B0cWBAjvlCf7xHkjlK-reWB12ufR1~EZqNfK8NYOPpdtP5MNAGRYuEhG8ojTW4hg50F8VvzYxNvPlKakDgWSvGrvZgnkG5UJohm6PG2nam0wdkjFP3eeWMOoP3gL0FOHRJKTXL7zcZ0htfzd~pT9VusGwcP4bnjeOnMfDokvV-3GWGWgAmI2kaIQWpI5PQF084zPIzlX7chMwpBHlg1EhvSFAT4Cd4SQxrwkVEOviCQX9XVe18m8AWFajHnHwzizb2dDSRd7H-nxx80MQSGoN24FzBhBYQ__"
              className="w-full h-full"
            />
            <div className="absolute bottom-[40px] left-[142px] font-[Montaga] font-[400] text-[30px] text-center text-white ">
              Rings
            </div>
          </div>
          <div className="w-[355px] h-[560px] border relative ">
            <img
              src="https://s3-alpha-sig.figma.com/img/ae7b/4e23/bd64d2c3a60cc0515953bf2a57c27028?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmB17WYd1RXVHOY6mBQmiW2pgOXO1adaJOYKZpawkDPr-w026QsX561-MFJSpnFlqe0Gz0S9P6h54XfZuTkmPt1CZJTNPWvSP1SxhiOI31z10Gup6jTRSF7JSHBIy7TR4zHMNJ8i5ac32UQGjWgyWAowMjXK0v9prGsVNBMMyY3ot6~02EcJd-5WpNRtsXRmNumCc56rVLlEQH9D9Sa63ugCZ2ZV8PihyyQkhhIJ63M6af2UsJ-PtjmA4wTjFKDHcJWsMbz6jiqzfJTP7eQGGbCZJjfbqgxe5FdJW32Kn~NPDOzNEjK4DlBtU0aVpy5uxIgEcl3aZznGyQTes~OiHw__"
              className="w-full h-full"
            />
            <div className="absolute bottom-[40px] left-[142px] font-[Montaga] font-[400] text-[30px] text-center text-white ">
              {" "}
              Bracelets{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-screen h-[1000px] flex flex-col items-center mt-16">
        <p className="w-[270px] h-[19px] font-[Inter] font-[500] text-[16px] tracking-wide text-center leading-[19px] text-[#2993B5] ">
          Wedding Room
        </p>
        <h1 className="w-[409px] h-[55px] font-[Montaga] font-[400] text-[45px] leading-[55px] text-center text-black  ">
          Our Latest LookBook
        </h1>

        <div className="flex gap-4 justify-center items-center mt-7">
          <div className="w-[300px] h-[380px] border ">
            <img src="https://s3-alpha-sig.figma.com/img/a80b/b8e4/da78895220450e9ce808a3f3e0aaed95?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMMLQbiSIMX16CIjDwAcEmG8HgiMXYhJauFMCo1gkH2sZM6Vmu-a1Dy6iJt46hRQQsnSI3z-EvM~RkD0PcqHRWf9hjnCFMvmUXAL3AiUW54MwGMpxF8EaIU1gA-UxOLEFBoWjtp0kjyzRA6h~mYE5kT-W9bpWaGdgXrajloUE9zi75uNuOuoNTL6b7dKov5Ix8CqpYt7dzL9HtP8mCLMsEpnZpswkdDaZstxhQCuioOv-74TCJRoQIRRnpM0pGQHO9Zxd0OgDxpRcFE1Nv3W-AWWj~yHGgABnqfghaiL2a~22zdfQbZfxKEHC4mXX~yDPjXdWGlAuwIU4jr2VVwDeQ__" />

            <div className="w-full flex flex-col items-center mt-4">
              <div className="w-[256px] h-[27px] font-[Montaga] font-[400] text-[22px] text-center leading-[27px] text-black ">
                Signature Larieu Necklace
              </div>
              <div className="w-[130px] h-[17px] font-[Inter] font-[400] text-[14px] leading-[16px] text-center text-[#8D8D8D] ">
                Gold Plated Vermeil
              </div>
            </div>
          </div>
          <div className="w-[412px] h-[534px] border relative ">
            <img src="https://s3-alpha-sig.figma.com/img/f529/a296/8093a0df3cdfd4dc3416583f02355dd2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gp0SgvB5cWhNgjwqxjn6X3KWKs4TVOIAD9dp7Mc0VhfWGmuNIRaSzQ1hUyeAE0oKz7ZTE36UGXhidIN-Pz4tNtAh3Hh0Z-E6HbQyT-Bx-2wksu3XKrldBxcDTP3~e2R9OFUN6I8XI80DKDnm7JCwJQAVdkIwhTocJlkc-3R8QgBephq26Ips28D3nIieHcnzCwgUFqG~~PJY9VgfHvhr4pG3~iy5bOoiawXcEVqmuGcJsH~A6pQR1UJanif~BmNgpIKzIvDJIzsAS~UbkERLq1VnTAGqyzQ8o8hUXjmhnEoTpH6A73EFbNaGVS4COiI~kld9HilRk9cyCvkFe5~12Q__" />

            <div className="w-full flex flex-col items-center mt-4 absolute bottom-[10px] justify-center ">
              <div className="w-[256px] h-[27px] font-[Montaga] font-[400] text-[22px] text-center leading-[27px] text-black ">
                Signature Larieu Necklace
              </div>
              <div className="w-[130px] h-[17px] font-[Inter] font-[400] text-[14px] leading-[16px] text-center text-[#8D8D8D] ">
                Gold Plated Vermeil
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[380px] border ">
            <img src="https://s3-alpha-sig.figma.com/img/108a/66eb/0058492ef34650d779c9ef7c4fa3f5b5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GecoP3dtGwX4q6ljv~OgTITYMIzFXRMpWfLNk5WDFh4~fCbN~HAEuaUzsTVEIWnkqr~Lt74BFw7hIv~c1yk1VCCh93Biak9jD4oxlEwbrsDlWVu2bxTEw86u7khO3b4FFK~CArzUoKM7Fexoze9t~hLZ-jCSEeOqF5KFO2I6lcDdVLM8n2tWXHJz4CyVoqKWkSr54MFAY2ll6IzCsFWb1CFovzwcj9QWUTXkyEqk6YT4xoeSYLy9qu19z29CMLnf2aHEmMtyWMAubfiKDHP4Ux6HskOsKjuJcXiBbQjr-uj8TdcJuifHf3pqKLIi~092GSPPb07qzb8LUMNXSktqIw__" />
            <div className="w-full flex flex-col items-center mt-4">
              <div className="w-[256px] h-[27px] font-[Montaga] font-[400] text-[22px] text-center leading-[27px] text-black ">
                Signature Larieu Necklace
              </div>
              <div className="w-[130px] h-[17px] font-[Inter] font-[400] text-[14px] leading-[16px] text-center text-[#8D8D8D] ">
                Gold Plated Vermeil
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px] h-[90px] mt-16 flex flex-col items-center relative ">
          <div className="h-full w-[120px]  ">
            <img src="https://s3-alpha-sig.figma.com/img/5f5e/b394/843282f33350ed1e0603043d81f1a532?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKF29Yr4D3FjunsqgtBX78LVlEREylzyJmVusBz6TCFWGq340AlKrgDTgUSGbuhjSzvzejJPMUvNwRarSANsMiAl8pvHX9TzCAWrkhP-8Q6mw6vwe4DCdQVmdG0osKj4cK92egW-yMHDXNM55gQSWRmKNrwKgYxlhaZunhhaUN0xy-QAxAlELigs~vXcd7qeMDGIZFmVQPWjrknNWc0OUs6TzIWqWZQAOTH~duUBoJRQsQ-D6l7CSZITtdGAyupYrwZ9ZW8ndFDHZvkx37dRAeM2UixmlgvZuPrFHYCUdW476VS9OeI11s3mVmhZlAN9XjgUKrGUCLDT2dqmoK1yOQ__" />
          </div>
          <div className="w-full h-[52px] border-[1px] border-[#767676] absolute top-5">
            <h2 className="w-full h-full font-[Inter] font-[400] text-[16px] text-center text-[#767676] flex justify-center items-center tracking-[4px] ">
              BROWSE ALL COLLECTIONS
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default wishlist;
