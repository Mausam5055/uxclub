import { Component } from "react";

export default class Scroller extends Component {
  render() {
    return (
      <div className="relative w-full overflow-hidden py-6 border-t border-b flex grid-pattern">
        <div className="w-full h-30 pl-[25%] flex justify-center">
          <div className="flex gap-16 w-max items-center animate-marquee">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex gap-16">
                  <div className="h-18 w-68 border bg-white rounded-full flex gap-4 px-4 items-center text-xl">
                    <svg
                      width="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.7929 20.5H21.2071L1.20711 0.5H20.7929L40.7929 20.5ZM20.7929 21.5L40.7929 41.5H21.2071L1.20711 21.5H20.7929Z"
                        fill="#DCFEBC"
                        stroke="black"
                      ></path>
                    </svg>
                    <span>Code Innovation</span>
                  </div>
                  <div className="h-18 w-60 border bg-white rounded-full flex gap-4 px-4 items-center text-xl">
                    <svg
                      width="46"
                      viewBox="0 0 50 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.0218 4.32944L45.3502 10.4235L36.6101 18.8398L35.7169 19.7H36.9569H49.3462V28.3H36.9569H35.7169L36.6101 29.1602L45.3502 37.5766L39.0218 43.6706L30.2545 35.228L29.4077 34.4125V35.5882V47.5H20.4385V35.5882V34.4125L19.5916 35.228L10.8245 43.6706L4.49598 37.5763L13.236 29.1602L14.1292 28.3H12.8891H0.5V19.7H12.8892H14.1292L13.236 18.8398L4.49598 10.4235L10.8245 4.32946L19.5916 12.7719L20.4385 13.5874V12.4118V0.5H29.4077V12.4118V13.5874L30.2545 12.7719L39.0218 4.32944Z"
                        fill="#E2C6FF"
                        stroke="black"
                      ></path>
                    </svg>
                    <span>Team Collaboration</span>
                  </div>
                  <div className="h-18 w-68 border bg-white rounded-full flex gap-4 px-4 items-center text-xl">
                    <svg
                      width="44"
                      viewBox="0 0 48 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.55243 26C13.823 23.7722 21.8746 15.0818 24 4.03698C26.1255 15.0818 34.177 23.7722 44.4476 26C34.177 28.2278 26.1255 36.9182 24 47.963C21.8746 36.9182 13.823 28.2278 3.55243 26Z"
                        fill="#FFBA00"
                        stroke="black"
                      ></path>
                    </svg>
                    <span>Design Thinking</span>
                  </div>
                  <div className="h-18 w-68 border bg-white rounded-full flex gap-4 px-4 items-center text-xl">
                    <svg
                      width="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.7929 20.5H21.2071L1.20711 0.5H20.7929L40.7929 20.5ZM20.7929 21.5L40.7929 41.5H21.2071L1.20711 21.5H20.7929Z"
                        fill="#DCFEBC"
                        stroke="black"
                      ></path>
                    </svg>
                    <span>Rapid Prototyping</span>
                  </div>
                  <div className="h-18 w-60 border bg-white rounded-full flex gap-4 px-4 items-center text-xl">
                    <svg
                      width="46"
                      viewBox="0 0 50 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.0218 4.32944L45.3502 10.4235L36.6101 18.8398L35.7169 19.7H36.9569H49.3462V28.3H36.9569H35.7169L36.6101 29.1602L45.3502 37.5766L39.0218 43.6706L30.2545 35.228L29.4077 34.4125V35.5882V47.5H20.4385V35.5882V34.4125L19.5916 35.228L10.8245 43.6706L4.49598 37.5763L13.236 29.1602L14.1292 28.3H12.8891H0.5V19.7H12.8892H14.1292L13.236 18.8398L4.49598 10.4235L10.8245 4.32946L19.5916 12.7719L20.4385 13.5874V12.4118V0.5H29.4077V12.4118V13.5874L30.2545 12.7719L39.0218 4.32944Z"
                        fill="#E2C6FF"
                        stroke="black"
                      ></path>
                    </svg>
                    <span>Problem Solving</span>
                  </div>
                  <div className="h-18 w-68 border bg-white rounded-full flex gap-4 px-4 items-center text-xl">
                    <svg
                      width="44"
                      viewBox="0 0 48 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.55243 26C13.823 23.7722 21.8746 15.0818 24 4.03698C26.1255 15.0818 34.177 23.7722 44.4476 26C34.177 28.2278 26.1255 36.9182 24 47.963C21.8746 36.9182 13.823 28.2278 3.55243 26Z"
                        fill="#FFBA00"
                        stroke="black"
                      ></path>
                    </svg>
                    <span>User Experience</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}