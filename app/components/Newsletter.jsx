const Newsletter = () => {
  return (
    <div className="flex justify-center w-full px-5 py-7 bg-blue-950 min-w-[310px]">
      <div className="flex flex-col gap-3 w-full mx-auto team2:max-w-md max-w-sm mb-4">
        <span className="team2:text-2xl text-xl font-semibold w-full text-center min-w-[270px] text-stone-100">
          Subscribe to our newsletter!
        </span>
        <form
          action=""
          className="text-sm transition-shadow duration-200 mt-2 border dark:border-blue-700 border-blue-50 rounded-md flex w-full hover:shadow-lg active:shadow-lg focus-within:shadow-lg min-w-[278px]"
        >
          <input
            id="email"
            className="w-full py-2 px-3 outline-0 border-r dark:border-blue-700 border-blue-50 text-stone-100"
            type="email"
            autoComplete="email"
            required
          />
          <button
            className="cursor-pointer w-25 py-2 px-3 rounded-tr-[4.8px] rounded-br-[4.8px] dark:bg-blue-700 dark:hover:bg-blue-600 dark:active:bg-blue-600 bg-blue-50 hover:bg-blue-100 active:bg-blue-100 font-medium transition-all duration-200"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
