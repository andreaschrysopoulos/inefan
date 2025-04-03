export const metadata = {
  title: "Inefan - About",
  description: "Independent Economic & Financial Analysis",
};

export default async function AboutPage() {

  return (
    <div className='flex flex-auto flex-col items-center justify-center px-5 pb-8 mb-20'>
      <div className="flex flex-col max-w-5xl mx-auto">

        {/* Title */}
        <span className='font-semibold team3:text-6xl text-5xl mb-6 mt-20 text-center'>Independent Economic & Financial Analysis</span>

        {/* Subtitle */}
        <span className='team3:text-3xl text-2xl mb-30 dark:text-stone-400 text-stone-500 max-w-3xl self-center text-center'>
          <div className="">Inefan (Independent Economic & Financial Analysis) is a non-profit association founded by a group of students and graduates from the Department of Economics at Aristotle University of Thessaloniki.</div>
        </span>

        {/* Heading */}
        <span className="team3:text-6xl text-5xl font-semibold text-center mb-10 bg-gradient-to-r from-0% from-blue-600 to-100% to-violet-600 bg-clip-text text-transparent">Milestones since 2018</span>

        {/* Numbers */}
        <div className="flex flex-wrap justify-center mb-5 gap-15 text-center">
          <div>
            <div className="team2:text-5xl text-4xl font-semibold">110</div>
            <div className="team2:text-2xl text-xl dark:text-stone-400">Editors</div>
          </div>
          <div>
            <div className="team2:text-5xl text-4xl font-semibold">280</div>
            <div className="team2:text-2xl text-xl dark:text-stone-400">Published Articles</div>
          </div>
          <div>
            <div className="team2:text-5xl text-4xl font-semibold">38</div>
            <div className="team2:text-2xl text-xl dark:text-stone-400">Events</div>
          </div>
          <div>
            <div className="team2:text-5xl text-4xl font-semibold">8.000+</div>
            <div className="team2:text-2xl text-xl dark:text-stone-400">Participants</div>
          </div>

        </div>
      </div>
    </div>
  )
}