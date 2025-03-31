import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full dark:bg-stone-950 bg-stone-800 px-5 text-stone-100 min-w-[310px]">
      <div className="py-2.5 flex flex-wrap justify-between max-w-5xl w-full items-center text-sm gap-x-5 gap-y-3">
        {/* <Breadcrums /> */}
        <Link className="hover:opacity-90 active:opacity-90 opacity-60 flex items-center" href="mailto:info@inefan.gr">info@inefan.gr

          <svg className="ml-0.5" width="14" height="14" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </Link>
        <div className="flex gap-4 items-center justify-center">

          {/* Instagram */}
          <Link href="https://www.instagram.com/inefan.gr/" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 flex items-center justify-center opacity-50 hover:opacity-100 active:opacity-100 will-change-transform">
            <svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
              <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" fill="currentColor" />
            </svg>
          </Link>

          {/* Facebook */}
          <Link href="https://www.facebook.com/inefan.gr" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 flex items-center justify-center opacity-50 hover:opacity-100 active:opacity-100 will-change-transform">
            <img className="min-w-[17px] max-w-[17px] min-h-[17px] max-h-[17px]" src="/facebook.png" alt="Facebook" />
          </Link>

          {/* Youtube */}
          <Link href="https://www.youtube.com/channel/UC5GXzo05fMKi4aeN4D7rLRw" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 flex items-center justify-center opacity-50 hover:opacity-100 active:opacity-100 will-change-transform">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z" fill="currentColor" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/company/inefan" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 flex itemeitems-center justify-center opacity-50 hover:opacity-100 active:opacity-100 will-change-transform">
            <img className="min-w-[16.5px] max-w-[16.5px] min-h-[16.5px] max-h-[16.5px]" src="/linkedin.png" alt="LinkedIn" />
          </Link>

        </div>
        <span className="min-w-max opacity-60">Copyright &copy; 2025 Inefan.</span>
      </div>
    </footer>
  );
};

export default Footer;
