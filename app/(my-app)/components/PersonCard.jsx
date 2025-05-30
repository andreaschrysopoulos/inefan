'use client'

import { useState, useEffect, useRef, useCallback } from "react"

const CardTeamMember = ({ name, role, bio, img, linkedin, title }) => {

  const [popupState, setPopupState] = useState(false);
  const card = useRef(null);
  const popup = useRef(null);
  const popupCloseBtnLight = useRef(null);
  const popupCloseBtnDark = useRef(null);

  const scrollPosition = useRef(0);

  const openPopup = useCallback(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    scrollPosition.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflowY = 'auto';
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.getElementById('nav').style.paddingRight = `${scrollbarWidth + 20}px`;
    setPopupState(true)
  }, []);

  const closePopup = useCallback(() => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = '';
    window.scrollTo(0, scrollPosition.current);
    document.getElementById('nav').style.paddingRight = '';

    setPopupState(false)
  }, []);

  useEffect(() => {
    const cardElement = card.current;
    const popupElement = popup.current;
    const popupCloseLightElement = popupCloseBtnLight.current;
    const popupCloseDarkElement = popupCloseBtnDark.current;

    if (!cardElement || !popupElement || !popupCloseLightElement || !popupCloseDarkElement) return;

    const handleClosePopup = (e) => {
      if (e.target === e.currentTarget) closePopup();
    };

    cardElement.addEventListener('click', openPopup)
    popupElement.addEventListener('click', handleClosePopup)
    popupCloseLightElement.addEventListener('click', handleClosePopup)
    popupCloseDarkElement.addEventListener('click', handleClosePopup)

    return () => {
      cardElement.removeEventListener("click", openPopup);
      popupElement.removeEventListener("click", handleClosePopup);
      popupCloseLightElement.removeEventListener("click", handleClosePopup);
      popupCloseDarkElement.removeEventListener("click", handleClosePopup);
    };

  })


  return (
    <>

      {/* Main Container */}
      <div ref={card} className="group cursor-pointer flex flex-col h-full max-w-79 min-w-70 rounded-4xl bg-white dark:bg-stone-900">

        {/* Photo */}
        <div className="h-75 overflow-hidden rounded-tl-4xl rounded-tr-4xl">
          <img
            className="will-change-transform size-full object-cover transition-all duration-400 ease-in-out group-active:scale-[1.03] group-hover:scale-[1.03]"
            src={img}
            alt="photo"
          />
        </div>

        {/* Info Container */}
        <div className="p-7 pt-5 flex flex-col">
          <span className="font-medium dark:text-stone-300 text-stone-700">
            {role}
          </span>
          <span className="text-2xl font-semibold">{name}</span>
        </div>

      </div>

      {/* Popup */}
      <div ref={popup} className={`backdrop-blur-lg transition-opacity ease-in-out duration-300 flex overflow-x-auto team2:p-5 team3:pt-20 team2:pt-10 fixed h-dvh w-dvw bg-white/5 dark:bg-black/5 top-0 left-0 z-50 ${popupState ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        {/* Container */}
        <div className={`will-change-auto overflow-y-auto duration-300 relative flex flex-col team2:h-max h-full min-w-70 team3:w-180 team2:w-150 w-full bg-white dark:bg-stone-800 p-0 team3:p-6 py-6 team2:mx-auto team2:rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.165)] ${popupState ? "" : "team2:translate-y-7 scale-[0.95]"}`}>

          {/* Close button */}
          <img ref={popupCloseBtnLight} src="/close-light.svg" className="absolute right-5 top-5 cursor-pointer fa-regular fa-xmark w-6 h-6 opacity-30 hover:opacity-50 active:opacity-50 transition-all duration-200 self-end block dark:hidden"></img>
          <img ref={popupCloseBtnDark} src="/close-dark.svg" className="absolute right-5 top-5 cursor-pointer fa-regular fa-xmark w-6 h-6 opacity-30 hover:opacity-60 active:opacity-60 transition-all duration-200 self-end hidden dark:block"></img>

          {/* Card Content */}
          <div className="p-7 team3:p-10 w-fit flex flex-col items-center self-center">

            {/* Photo */}
            <img className="w-50 rounded-full shadow-lg" src={img} alt="photo" />

            {/* Role */}
            <span className="text-xl font-medium dark:text-stone-300 text-stone-700 mt-7 text-center">{role}</span>

            {/* Full Name */}
            <span className="w-fit text-4xl team3:text-5xl font-semibold text-center mt-1">{name}</span>

            {/* Title */}
            <span className="w-fit text-base text-center mt-3">{title}</span>

            {/* LinkedIn */}
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 flex items-center justify-center opacity-60 hover:opacity-100 active:opacity-100 will-change-transform mt-5 team3:mt-6 ml-0.5">

              <svg
                width="24"
                height="24"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="LinkedIn logo"
                shapeRendering="geometricPrecision">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0h56a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8Z
     M62 62H51.315625V43.8021149c0-4.9893607-1.8958333-7.7775826-5.8449219-7.7775826-4.2960937 0-6.540625 2.9015781-6.540625 7.7775826V62H28.6333333V27.3333333h10.2967448v4.6695946s3.096-5.7287132 10.452509-5.7287132c7.353125 0 12.6179689 4.4902554 12.6179689 13.7769979V62ZM16.349349 22.7940133c3.507292 0 6.348349-2.8643567 6.348349-6.3970067 0-3.53265-2.841057-6.3970067-6.348349-6.3970067S10 12.8643566 10 16.3970067c0 3.53265 2.842057 6.3970066 6.349349 6.3970066ZM11.0325521 62h10.7368489V27.3333333H11.0325521V62Z"
                  fill="currentColor" />
              </svg>
            </a>
            {/* Bio */}
            <span className="mt-7 team3:mt-10">{bio}</span>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeamMember;
