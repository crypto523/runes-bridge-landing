import React, { useEffect } from "react";
import gsap from "gsap";
import SectionLayout from "./Layout";

interface TaskboardProps {
}

const Taskboard: React.FC<TaskboardProps> = () => {
  useEffect(() => {
    gsap.to("#taskboard", { opacity: 1, scaleX: 1, duration: 1 });
  });

  return (
    <div id="taskboard" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 lg:portrait:overflow-auto lg:landscape:overflow-hidden`} style={{ opacity: 0 }}>
      <SectionLayout ltr={false}  nextSection="RBVTOKEN">
        <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-[75%] lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 lg:portrait:flex-col-reverse`}>
          <div className={`flex flex-col items-start gap-2.5 lg:landscape:w-[60%] xl:w-[50%]`}>
            <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
              TaskBoard / Suggestions
            </h2>
            <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
              <p className="md:text-base 2xl:text-lg">
                In the short term, all suggestions and tasks should be forwarded
                to the Suggestions or Tasks Board tickets. We want to make sure
                that growth comes from the community in the form of tasks and that
                suggestions from the community are always recorded so that we
                don’t miss an opportunity to close a knowledge gap or embrace any
                insights from our community.
              </p>
            </div>
          </div>

          <div className={`w-full flex flex-col items-center justify-center lg:landscape:w-[50%] pb-4`}>
            <svg
              width="308"
              height="100"
              viewBox="0 0 308 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95.7808 49.7914C97.9501 49.7914 99.7248 48.0298 99.5539 45.8672C98.7001 35.0634 94.3383 24.7922 87.0775 16.6507C78.9421 7.5286 67.7356 1.7176 55.5924 0.324473C43.4493 -1.06865 31.2179 2.05345 21.228 9.09611C11.2382 16.1388 4.18773 26.6099 1.41964 38.5152C-1.34845 50.4204 0.359206 62.9279 6.21735 73.6554C12.0755 84.3829 21.6748 92.5808 33.187 96.6878C44.6991 100.795 57.3198 100.524 68.645 95.9266C78.7529 91.8235 87.1986 84.5301 92.7311 75.2112C93.8386 73.3459 93.0231 70.982 91.0763 70.0249C89.1294 69.0679 86.7908 69.8822 85.6559 71.731C80.9937 79.3259 74.0106 85.27 65.6902 88.6475C56.1518 92.5194 45.5224 92.7476 35.8266 89.2887C26.1308 85.8297 18.0461 78.9251 13.1122 69.8902C8.17832 60.8553 6.7401 50.3212 9.07145 40.2943C11.4028 30.2674 17.3408 21.4484 25.7545 15.5169C34.1683 9.58538 44.4698 6.95587 54.697 8.12919C64.9243 9.30251 74.3627 14.1967 81.2145 21.8795C87.1913 28.5812 90.8357 36.9964 91.6691 45.869C91.8719 48.0289 93.6114 49.7914 95.7808 49.7914Z"
                fill="#D9D9D9"
              />
              <circle cx="49.9174" cy="49.7914" r="34.7284" fill="#061012" />
              <path
                d="M31.0884 47.9443L45.3145 62.1704"
                stroke="white"
                strokeWidth="2.51049"
                strokeLinecap="round"
              />
              <path
                d="M68.7461 38.4941L45.3149 61.9254"
                stroke="white"
                strokeWidth="2.51049"
                strokeLinecap="round"
              />
              <path
                d="M117.282 41.8413H216.865"
                stroke="#061012"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
              <path
                d="M117.282 68.6201H257.033"
                stroke="#D9D9D9"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
              <path
                d="M243.644 41.8413L298.874 41.8413"
                stroke="#D9D9D9"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
            </svg>

            <svg
              width="308"
              height="101"
              viewBox="0 0 308 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95.7808 50.4999C97.9501 50.4999 99.7248 48.7383 99.5539 46.5757C98.7001 35.7719 94.3383 25.5007 87.0775 17.3592C78.9421 8.2371 67.7356 2.42609 55.5924 1.03297C43.4493 -0.360154 31.2179 2.76194 21.228 9.80461C11.2382 16.8473 4.18773 27.3184 1.41964 39.2237C-1.34845 51.1289 0.359206 63.6364 6.21735 74.3639C12.0755 85.0914 21.6748 93.2893 33.187 97.3963C44.6991 101.503 57.3198 101.232 68.645 96.635C78.7529 92.532 87.1986 85.2386 92.7311 75.9197C93.8386 74.0544 93.0231 71.6905 91.0763 70.7334C89.1294 69.7764 86.7908 70.5907 85.6559 72.4395C80.9937 80.0344 74.0106 85.9785 65.6902 89.356C56.1518 93.2279 45.5224 93.4561 35.8266 89.9971C26.1308 86.5382 18.0461 79.6336 13.1122 70.5987C8.17832 61.5638 6.7401 51.0296 9.07145 41.0028C11.4028 30.9759 17.3408 22.1569 25.7545 16.2254C34.1683 10.2939 44.4698 7.66437 54.697 8.83769C64.9243 10.011 74.3627 14.9052 81.2145 22.588C87.1913 29.2897 90.8357 37.7049 91.6691 46.5775C91.8719 48.7374 93.6114 50.4999 95.7808 50.4999Z"
                fill="#D9D9D9"
              />
              <circle cx="49.9174" cy="50.4999" r="34.7284" fill="#061012" />
              <path
                d="M63.5158 64.0988L50.3359 50.9189M50.3359 50.9189L37.1558 37.7388M50.3359 50.9189L63.516 37.7388M50.3359 50.9189L37.1558 64.099"
                stroke="white"
                strokeWidth="1.67366"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M117.282 37.5293H216.865"
                stroke="#061012"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
              <path
                d="M117.282 64.3076H257.033"
                stroke="#D9D9D9"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
              <path
                d="M243.644 37.5293L298.874 37.5293"
                stroke="#D9D9D9"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
            </svg>

            <svg
              width="308"
              height="100"
              viewBox="0 0 308 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95.7808 49.7914C97.9501 49.7914 99.7248 48.0298 99.5539 45.8672C98.7001 35.0634 94.3383 24.7922 87.0775 16.6507C78.9421 7.5286 67.7356 1.7176 55.5924 0.324473C43.4493 -1.06865 31.2179 2.05345 21.228 9.09611C11.2382 16.1388 4.18773 26.6099 1.41964 38.5152C-1.34845 50.4204 0.359206 62.9279 6.21735 73.6554C12.0755 84.3829 21.6748 92.5808 33.187 96.6878C44.6991 100.795 57.3198 100.524 68.645 95.9266C78.7529 91.8235 87.1986 84.5301 92.7311 75.2112C93.8386 73.3459 93.0231 70.982 91.0763 70.0249C89.1294 69.0679 86.7908 69.8822 85.6559 71.731C80.9937 79.3259 74.0106 85.27 65.6902 88.6475C56.1518 92.5194 45.5224 92.7476 35.8266 89.2887C26.1308 85.8297 18.0461 78.9251 13.1122 69.8902C8.17832 60.8553 6.7401 50.3212 9.07145 40.2943C11.4028 30.2674 17.3408 21.4484 25.7545 15.5169C34.1683 9.58538 44.4698 6.95587 54.697 8.12919C64.9243 9.30251 74.3627 14.1967 81.2145 21.8795C87.1913 28.5812 90.8357 36.9964 91.6691 45.869C91.8719 48.0289 93.6114 49.7914 95.7808 49.7914Z"
                fill="#D9D9D9"
              />
              <circle cx="49.9174" cy="49.7914" r="34.7284" fill="#061012" />
              <path
                d="M31.0884 47.9443L45.3145 62.1704"
                stroke="white"
                strokeWidth="2.51049"
                strokeLinecap="round"
              />
              <path
                d="M68.7461 38.4941L45.3149 61.9254"
                stroke="white"
                strokeWidth="2.51049"
                strokeLinecap="round"
              />
              <path
                d="M117.282 41.8413H216.865"
                stroke="#061012"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
              <path
                d="M117.282 68.6201H257.033"
                stroke="#D9D9D9"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
              <path
                d="M243.644 41.8413L298.874 41.8413"
                stroke="#D9D9D9"
                strokeWidth="16.7366"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Taskboard;

// <SectionLayoutF
//   currentSection="TASKBOARD"
//   nextSection="RBV"
//   showSection={showSection}
//   hideSection={hideSection}
// >
//   <div className="w-full flex-1 flex items-center justify-around">
//     <div className="max-w-[531px] flex flex-col gap-2.5">
//       <h2 className="font-poppins font-[600] text-[40px] leading-[86px] text-primary">
//         TaskBoard / Suggestions
//       </h2>
//       <p className="max-w-[504px] text-[#727272] font-inter font-[500] text-[16px] leading-[19.36px]">
//         In the short term, all suggestions and tasks should be forwarded
//         to the Suggestions or Tasks Board tickets. We want to make sure
//         that growth comes from the community in the form of tasks and that
//         suggestions from the community are always recorded so that we
//         don’t miss an opportunity to close a knowledge gap or embrace any
//         insights from our community.
//       </p>
//     </div>
//     <div className="flex flex-col">
//       <svg
//         width="308"
//         height="100"
//         viewBox="0 0 308 100"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M95.7808 49.7914C97.9501 49.7914 99.7248 48.0298 99.5539 45.8672C98.7001 35.0634 94.3383 24.7922 87.0775 16.6507C78.9421 7.5286 67.7356 1.7176 55.5924 0.324473C43.4493 -1.06865 31.2179 2.05345 21.228 9.09611C11.2382 16.1388 4.18773 26.6099 1.41964 38.5152C-1.34845 50.4204 0.359206 62.9279 6.21735 73.6554C12.0755 84.3829 21.6748 92.5808 33.187 96.6878C44.6991 100.795 57.3198 100.524 68.645 95.9266C78.7529 91.8235 87.1986 84.5301 92.7311 75.2112C93.8386 73.3459 93.0231 70.982 91.0763 70.0249C89.1294 69.0679 86.7908 69.8822 85.6559 71.731C80.9937 79.3259 74.0106 85.27 65.6902 88.6475C56.1518 92.5194 45.5224 92.7476 35.8266 89.2887C26.1308 85.8297 18.0461 78.9251 13.1122 69.8902C8.17832 60.8553 6.7401 50.3212 9.07145 40.2943C11.4028 30.2674 17.3408 21.4484 25.7545 15.5169C34.1683 9.58538 44.4698 6.95587 54.697 8.12919C64.9243 9.30251 74.3627 14.1967 81.2145 21.8795C87.1913 28.5812 90.8357 36.9964 91.6691 45.869C91.8719 48.0289 93.6114 49.7914 95.7808 49.7914Z"
//           fill="#D9D9D9"
//         />
//         <circle cx="49.9174" cy="49.7914" r="34.7284" fill="#061012" />
//         <path
//           d="M31.0884 47.9443L45.3145 62.1704"
//           stroke="white"
//           strokeWidth="2.51049"
//           strokeLinecap="round"
//         />
//         <path
//           d="M68.7461 38.4941L45.3149 61.9254"
//           stroke="white"
//           strokeWidth="2.51049"
//           strokeLinecap="round"
//         />
//         <path
//           d="M117.282 41.8413H216.865"
//           stroke="#061012"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//         <path
//           d="M117.282 68.6201H257.033"
//           stroke="#D9D9D9"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//         <path
//           d="M243.644 41.8413L298.874 41.8413"
//           stroke="#D9D9D9"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//       </svg>

//       <svg
//         width="308"
//         height="101"
//         viewBox="0 0 308 101"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M95.7808 50.4999C97.9501 50.4999 99.7248 48.7383 99.5539 46.5757C98.7001 35.7719 94.3383 25.5007 87.0775 17.3592C78.9421 8.2371 67.7356 2.42609 55.5924 1.03297C43.4493 -0.360154 31.2179 2.76194 21.228 9.80461C11.2382 16.8473 4.18773 27.3184 1.41964 39.2237C-1.34845 51.1289 0.359206 63.6364 6.21735 74.3639C12.0755 85.0914 21.6748 93.2893 33.187 97.3963C44.6991 101.503 57.3198 101.232 68.645 96.635C78.7529 92.532 87.1986 85.2386 92.7311 75.9197C93.8386 74.0544 93.0231 71.6905 91.0763 70.7334C89.1294 69.7764 86.7908 70.5907 85.6559 72.4395C80.9937 80.0344 74.0106 85.9785 65.6902 89.356C56.1518 93.2279 45.5224 93.4561 35.8266 89.9971C26.1308 86.5382 18.0461 79.6336 13.1122 70.5987C8.17832 61.5638 6.7401 51.0296 9.07145 41.0028C11.4028 30.9759 17.3408 22.1569 25.7545 16.2254C34.1683 10.2939 44.4698 7.66437 54.697 8.83769C64.9243 10.011 74.3627 14.9052 81.2145 22.588C87.1913 29.2897 90.8357 37.7049 91.6691 46.5775C91.8719 48.7374 93.6114 50.4999 95.7808 50.4999Z"
//           fill="#D9D9D9"
//         />
//         <circle cx="49.9174" cy="50.4999" r="34.7284" fill="#061012" />
//         <path
//           d="M63.5158 64.0988L50.3359 50.9189M50.3359 50.9189L37.1558 37.7388M50.3359 50.9189L63.516 37.7388M50.3359 50.9189L37.1558 64.099"
//           stroke="white"
//           strokeWidth="1.67366"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M117.282 37.5293H216.865"
//           stroke="#061012"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//         <path
//           d="M117.282 64.3076H257.033"
//           stroke="#D9D9D9"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//         <path
//           d="M243.644 37.5293L298.874 37.5293"
//           stroke="#D9D9D9"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//       </svg>

//       <svg
//         width="308"
//         height="100"
//         viewBox="0 0 308 100"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M95.7808 49.7914C97.9501 49.7914 99.7248 48.0298 99.5539 45.8672C98.7001 35.0634 94.3383 24.7922 87.0775 16.6507C78.9421 7.5286 67.7356 1.7176 55.5924 0.324473C43.4493 -1.06865 31.2179 2.05345 21.228 9.09611C11.2382 16.1388 4.18773 26.6099 1.41964 38.5152C-1.34845 50.4204 0.359206 62.9279 6.21735 73.6554C12.0755 84.3829 21.6748 92.5808 33.187 96.6878C44.6991 100.795 57.3198 100.524 68.645 95.9266C78.7529 91.8235 87.1986 84.5301 92.7311 75.2112C93.8386 73.3459 93.0231 70.982 91.0763 70.0249C89.1294 69.0679 86.7908 69.8822 85.6559 71.731C80.9937 79.3259 74.0106 85.27 65.6902 88.6475C56.1518 92.5194 45.5224 92.7476 35.8266 89.2887C26.1308 85.8297 18.0461 78.9251 13.1122 69.8902C8.17832 60.8553 6.7401 50.3212 9.07145 40.2943C11.4028 30.2674 17.3408 21.4484 25.7545 15.5169C34.1683 9.58538 44.4698 6.95587 54.697 8.12919C64.9243 9.30251 74.3627 14.1967 81.2145 21.8795C87.1913 28.5812 90.8357 36.9964 91.6691 45.869C91.8719 48.0289 93.6114 49.7914 95.7808 49.7914Z"
//           fill="#D9D9D9"
//         />
//         <circle cx="49.9174" cy="49.7914" r="34.7284" fill="#061012" />
//         <path
//           d="M31.0884 47.9443L45.3145 62.1704"
//           stroke="white"
//           strokeWidth="2.51049"
//           strokeLinecap="round"
//         />
//         <path
//           d="M68.7461 38.4941L45.3149 61.9254"
//           stroke="white"
//           strokeWidth="2.51049"
//           strokeLinecap="round"
//         />
//         <path
//           d="M117.282 41.8413H216.865"
//           stroke="#061012"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//         <path
//           d="M117.282 68.6201H257.033"
//           stroke="#D9D9D9"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//         <path
//           d="M243.644 41.8413L298.874 41.8413"
//           stroke="#D9D9D9"
//           strokeWidth="16.7366"
//           strokeLinecap="round"
//         />
//       </svg>
//     </div>
//   </div>
// </SectionLayoutF>