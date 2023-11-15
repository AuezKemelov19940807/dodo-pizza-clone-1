import Image from 'next/image'
import CustomBtn from './CustomBtn'

const FooterTop = () => {
  return (
    <div>
      <div className="container mb-16">
        {/* title */}
        <div className="title mb-10 ">Доставка и оплата</div>
        <div className="flex gap-x-10 justify-between">
          {/* text 1 */}
          <div className="">
            {/* title */}
            <div className="subtitle mb-2.5">60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</div>
            {/* text */}
            <div className="max-w-[445px]">
              Если мы не успеем доставить любые продукты, кроме сувенирной
              продукции и соусов, в течение 60 минут, курьер подарит вам
              сертификат на большую пиццу.
            </div>
          </div>
          {/* text 2 */}
          <div className="">
            {/* block 1 */}
            <div className="mb-3">
              {/* price */}
              <div className="subtitle mb-2.5">3 500 ТГ.</div>
              {/* text */}
              <div>Минимальная сумма доставки</div>
            </div>
            {/* block 2 */}
            <div>
              {/* price */}
              <div className="subtitle mb-2.5">25 000 ТГ.</div>
              <div className="mb-2.5">
                Максимальная сумма при оплате наличными
              </div>
              <div>
                Изображения продуктов могут отличаться от продуктов в заказе.
              </div>
            </div>
          </div>
          {/* map */}
          <div>
            <div className="text-primary font-medium uppercase text-[16px] mb-1.5">
              ЗОНА ДОСТАВКИ ОГРАНИЧЕНА
            </div>
            <div className="grow-0 shrink-0 relative group overflow-hidden ">
              <div className="absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[18px]">
                Зона доставки
              </div>
              <Image
                src={
                  'https://dodopizza-a.akamaihd.net/site-static/dist/afdce5bbb5d38204b6c6.jpg'
                }
                width={282}
                height={191}
                alt=""
                className="group-hover:scale-125 transition-transform  duration-2000 opacity-80  group-hover:opacity-100 group-hover:bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary pb-2 pt-1 ">
        <div className="container flex items-center  justify-between">
          <div className="flex items-center gap-x-5">
            {/* icon */}
            <div>
              <svg width="48px" height="50px" viewBox="0 0 48 50" version="1.1">
                <title>79666236-7C7E-40DD-A2FF-5B2372EFA0C3</title>
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g
                  id="inline-svg-15-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="inline-svg-15-2"
                    transform="translate(-82.000000, -5996.000000)"
                    fill="#ffffff"
                  >
                    <g
                      id="inline-svg-15-3"
                      transform="translate(-48.000000, 5989.000000)"
                    >
                      <g id="inline-svg-15-4">
                        <g
                          id="inline-svg-15-5"
                          transform="translate(130.000000, 7.000000)"
                        >
                          <path
                            d="M23.0757255,25.9598788 C32.9907119,25.9598788 44.4442307,23.7505274 45.469919,21.7621112 C46.4956072,19.7736949 32.7057985,17.1224732 32.7057985,17.1224732 C29.400803,18.6137854 23.0187428,18.6137854 23.0187428,18.6137854 C23.0187428,18.6137854 16.6366826,18.6137854 13.3316871,17.1224732 C13.3316871,17.1224732 -0.401138925,19.8289287 0.624549326,21.8173449 C1.70722026,23.7505274 12.8758257,25.9598788 23.0757255,25.9598788 L23.0757255,25.9598788 Z"
                            id="inline-svg-15-6"
                          ></path>
                          <path
                            d="M31.6253877,13.3672513 C31.6253877,13.3672513 29.6879766,2.65189708 28.2634096,0.553013259 C26.8388426,-1.54587056 24.6735007,3.03853357 22.4511762,3.03853357 C20.2288516,3.03853357 19.7160075,0.111142981 17.7216137,0.000675411877 C15.6702372,-0.109792157 13.6758433,13.3672513 13.6758433,13.3672513 C13.6758433,13.3672513 24.1606566,15.6870703 31.6253877,13.3672513 L31.6253877,13.3672513 Z"
                            id="inline-svg-15-6"
                          ></path>
                          <path
                            d="M13.1629992,27.0645545 C13.1629992,27.0645545 12.2512763,31.1518546 17.7216137,31.2623221 C17.7216137,31.2623221 19.8299729,31.2623221 20.9126438,29.4396072 C21.2545399,28.8872694 21.767384,28.5558667 22.4511762,28.5558667 L22.6791069,28.5558667 C23.3059164,28.5558667 23.8757432,28.8872694 24.2176393,29.4396072 C25.3003102,31.2623221 27.4086694,31.2623221 27.4086694,31.2623221 C32.8790067,31.1518546 31.9672838,27.0645545 31.9672838,27.0645545 C29.4600459,27.8930613 25.5282409,27.8378275 24.1606566,27.7825937 L24.1606566,27.7825937 L23.6478125,27.7825937 L23.6478125,27.7825937 L21.4824706,27.7825937 C21.5394533,27.7273599 16.240064,28.0035288 13.1629992,27.0645545 L13.1629992,27.0645545 Z"
                            id="inline-svg-15-6"
                          ></path>
                          <path
                            d="M11.5105015,26.5674504 L7.29378312,25.9598788 L0,32.0355951 L0.683792167,32.0355951 C3.93180496,32.0355951 12.5361897,34.6868168 12.5361897,34.6868168 L7.97757529,38.4979479 C11.3965361,39.1607533 22.1662628,44.7393656 22.1662628,44.7393656 L23.191951,41.0939358 C14.5875662,34.9629857 11.5105015,26.5674504 11.5105015,26.5674504 L11.5105015,26.5674504 Z"
                            id="inline-svg-15-6"
                          ></path>
                          <path
                            d="M48,31.9251275 L39.1676845,25.9598788 L34.438122,26.5674504 C34.7230354,28.0587626 33.7543298,30.7652181 33.7543298,30.7652181 C20.1354692,40.7625331 22.3577937,49.6551724 22.3577937,49.6551724 C27.7711484,39.2712209 39.6805286,37.8351425 39.6805286,37.8351425 L34.267174,35.3496222 C37.8001002,33.1955046 48,31.9251275 48,31.9251275 L48,31.9251275 Z"
                            id="inline-svg-15-6"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* text */}
            <div className="text-white font-medium">
              Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
            </div>
          </div>
          <div>
            <CustomBtn
              bg="bg-white hover:bg-[#FFD2B3]"
              textColor="text-primary"
            >
              Заполнить анкету
            </CustomBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
