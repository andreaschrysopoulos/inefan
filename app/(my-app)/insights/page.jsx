import BlogFilter from '../components/BlogFilter'
import InsightsGrid from '../components/InsightsGrid'

export const metadata = {
  title: "Inefan - Insights",
  description: "Independent Economic & Financial Analysis",
};

export default function Insights() {

  // const serverTimestamp = new Date().toISOString();
  // console.log(`Built '/insights' at [${serverTimestamp}]`);

  return (
    <div className='flex-auto flex flex-col justify-start pb-15 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col w-70 team2:w-168 team3:w-min">
        {/* Render Time Stamp */}
      {/* <p className="text-sm text-gray-500">Server render: {serverTimestamp}</p> */}

        {/* Page Header */}
        <span className='font-semibold team3:text-6xl text-5xl mb-2'>Inefan Insights</span>
        {/* Page Subtitle */}
        <span className='team3:text-3xl text-2xl team3:mb-10 team2:mb-8 mb-5 dark:text-stone-400 text-stone-500 w-fit'>Explore insightful and thought-provoking articles curated by our editorial team.</span>

        {/* Filter */}
        <div>
          {/* <BlogFilter selectedFilters={selectedFilters} /> */}
        </div>


        {/* Articles */}
        <InsightsGrid />

      </div>

    </div>
  )
}