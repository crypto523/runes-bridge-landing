import React from "react"
import Image from "next/image"
import RunesButton from "../utils/Button";

const Navbar: React.FC = () => {

    return (
        <div className="w-full p-[40px_165px] border-b-2 border-[#C4C3CB]">
            <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer ">
                    <p className="font-conthrax font-[600] text-[20px] leading-[24px] text-[#061012]">RunesBridge</p>
                    <Image src="logo.svg" width={60} height={60} alt="logo" />
                    <p className="font-conthrax font-[600] text-[10px] leading-[12px] text-[#A5A5A5]">Beta</p>
                </div>
                <div className="flex items-center gap-[20px]">
                    <svg className="cursor-pointer" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5347 0H17.455C7.81486 0 0 7.81718 0 17.4601V17.5399C0 27.1828 7.81486 35 17.455 35H17.5347C27.1748 35 34.9897 27.1828 34.9897 17.5399V17.4601C34.9897 7.81718 27.1748 0 17.5347 0Z" fill="#061012" />
                        <path d="M26.2505 9.46533C24.6398 8.72592 22.9138 8.18148 21.1081 7.87002C21.075 7.86389 21.0419 7.87861 21.0259 7.90926C20.804 8.3041 20.5576 8.82034 20.386 9.22499C18.4443 8.93438 16.5123 8.93438 14.6098 9.22499C14.4369 8.81053 14.182 8.3041 13.9588 7.90926C13.9417 7.87983 13.9086 7.86512 13.8767 7.87002C12.0723 8.18148 10.345 8.72592 8.73425 9.46533C8.72077 9.47147 8.70851 9.48127 8.69993 9.49476C5.42443 14.3898 4.52708 19.1647 4.96716 23.8808C4.96961 23.9041 4.98187 23.9261 5.00026 23.9396C7.16145 25.5276 9.25524 26.4914 11.3098 27.1303C11.3429 27.1401 11.3772 27.1278 11.398 27.1008C11.8835 26.4375 12.3174 25.7373 12.6889 25.0003C12.7109 24.9574 12.6889 24.9059 12.6447 24.8887C11.957 24.6275 11.3036 24.31 10.6735 23.9494C10.6233 23.92 10.6196 23.8489 10.665 23.8146C10.7974 23.7152 10.9298 23.6122 11.056 23.508C11.0793 23.4884 11.1112 23.4847 11.1381 23.497C15.273 25.3854 19.7498 25.3854 23.8356 23.497C23.8626 23.4835 23.8944 23.4884 23.9177 23.5068C24.044 23.611 24.1764 23.7152 24.31 23.8146C24.3554 23.8489 24.3529 23.92 24.3027 23.9494C23.6738 24.3173 23.0192 24.6288 22.3302 24.8887C22.2849 24.9059 22.2653 24.9574 22.2873 25.0015C22.6673 25.7361 23.1001 26.4362 23.5769 27.1008C23.5965 27.129 23.6321 27.1413 23.6652 27.1315C25.7295 26.4926 27.8233 25.5288 29.9845 23.9409C30.0029 23.9274 30.0152 23.9053 30.0176 23.8832C30.5447 18.4315 29.135 13.6958 26.2824 9.49722C26.2751 9.48373 26.264 9.47269 26.2493 9.46656L26.2505 9.46533ZM13.3042 21.009C12.0588 21.009 11.034 19.8661 11.034 18.4621C11.034 17.0581 12.0404 15.9153 13.3042 15.9153C14.5681 15.9153 15.5954 17.0691 15.5745 18.4621C15.5745 19.8661 14.5681 21.009 13.3042 21.009ZM21.7001 21.009C20.4547 21.009 19.4299 19.8661 19.4299 18.4621C19.4299 17.0581 20.4363 15.9153 21.7001 15.9153C22.964 15.9153 23.9913 17.0691 23.9704 18.4621C23.9704 19.8661 22.975 21.009 21.7001 21.009Z" fill="white" />
                    </svg>
                    <svg className="cursor-pointer" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5449 0H17.4652C7.82511 0 0.0102539 7.81718 0.0102539 17.4601V17.5399C0.0102539 27.1828 7.82511 35 17.4652 35H17.5449C27.1851 35 34.9999 27.1828 34.9999 17.5399V17.4601C34.9999 7.81718 27.1851 0 17.5449 0Z" fill="#061012" />
                        <path d="M6.63714 16.9034C6.68617 16.8788 6.73523 16.8555 6.78304 16.8335C7.61417 16.4484 8.45633 16.0879 9.29727 15.7274C9.34263 15.7274 9.41861 15.6747 9.46152 15.6575C9.52649 15.6293 9.59147 15.6024 9.65644 15.5741C9.78148 15.5202 9.90652 15.4675 10.0303 15.4135C10.2804 15.3068 10.5292 15.2001 10.7793 15.0935L12.2761 14.4522C13.2739 14.0254 14.273 13.5975 15.2709 13.1708C16.2687 12.744 17.2678 12.3161 18.2656 11.8894C19.2635 11.4626 20.2626 11.0347 21.2604 10.608C22.2583 10.1812 23.2574 9.75328 24.2552 9.32656C24.4771 9.23091 24.7174 9.08867 24.9552 9.04697C25.155 9.01141 25.3499 8.94275 25.5509 8.90474C25.9322 8.83239 26.3526 8.80296 26.7179 8.96114C26.8442 9.01632 26.9607 9.09358 27.0575 9.19045C27.5209 9.64905 27.4559 10.4019 27.3578 11.0469C26.675 15.5423 25.9922 20.0388 25.3082 24.5341C25.215 25.1509 25.0875 25.8278 24.6009 26.2177C24.189 26.5476 23.603 26.5844 23.0943 26.4446C22.5856 26.3036 22.1369 26.0081 21.6968 25.7174C19.8715 24.5084 18.045 23.2993 16.2197 22.0903C15.7857 21.8033 15.3028 21.4281 15.3077 20.907C15.3101 20.5931 15.4977 20.3135 15.6889 20.0646C17.2752 17.9947 19.5638 16.5723 21.2666 14.5981C21.5068 14.3197 21.6956 13.817 21.3659 13.6563C21.1697 13.5607 20.9441 13.6907 20.7652 13.8145C18.5145 15.3779 16.2651 16.9426 14.0144 18.506C13.2801 19.0161 12.5102 19.541 11.6252 19.666C10.8333 19.7789 10.0365 19.5581 9.27031 19.3325C8.62796 19.1437 7.98681 18.9499 7.34814 18.7501C7.00858 18.6446 6.65798 18.5306 6.39564 18.2914C6.13331 18.0523 5.98255 17.6501 6.14069 17.3313C6.23998 17.1314 6.43244 17.0051 6.63471 16.9021L6.63714 16.9034Z" fill="#FEFFFC" />
                    </svg>
                </div>
                <RunesButton>
                    WorkShop
                </RunesButton>
            </div>
        </div>
    )
}

export default Navbar;