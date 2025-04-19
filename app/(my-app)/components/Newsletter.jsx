const Newsletter = () => {
  return (
    <div className="flex justify-center w-full px-5 py-7 bg-stone-200 dark:bg-stone-900 min-w-[310px]">
      <div className="flex flex-col gap-3 w-full mx-auto max-w-5xl mb-4 justify-between">

        <span className="team2:text-3xl text-2xl font-semibold w-full min-w-[270px] text-center">
          Subscribe to our newsletter!
        </span>
        <span className="font-light w-full min-w-[270px] text-center">
          We'll keep you in the loop with the latest news, events and updates from the team.
        </span>
        <form
          action=""
          className="max-w-sm text-sm transition-shadow duration-200 mt-2 border dark:border-blue-700 border-blue-500 rounded-md flex w-full hover:shadow-lg active:shadow-lg focus-within:shadow-lg min-w-[278px] mx-auto"
        >
          <input
            id="email"
            className="w-full py-2 px-3 outline-0 border-r dark:border-blue-700 border-blue-500"
            type="email"
            autoComplete="email"
            required
          />
          <button
            className="cursor-pointer w-25 py-2 px-3 rounded-tr-[4.8px] rounded-br-[4.8px] dark:bg-blue-700 dark:hover:bg-blue-600 dark:active:bg-blue-600 bg-blue-500 hover:bg-blue-400 active:bg-blue-400 font-medium transition-all duration-200 text-stone-100"
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
