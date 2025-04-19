import Image from "next/image"

export default function MembershipPage() {

  return <>

    {/* HERO */}
    <div className='flex-auto flex flex-col justify-start pb-15 pt-15 mt-[-23px] px-5 bg-stone-200'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid gap-x-10 gap-y-6 membershipHeroWrap:grid-cols-[2fr_1.3fr] grid-cols-1 items-center">

          {/* Text */}
          <div className="flex flex-col min-w-68 not-membershipHeroWrap:row-start-2 not-membershipHeroWrap:self-start">
            <div className="text-blue-500 team2:text-lg font-medium team2:mb-2 mb-1">Inefan Membership</div>
            <div className="team2:text-6xl text-5xl font-medium team2:mb-3 mb-1.5">Join the Team!</div>
            <div className="team2:text-xl text-lg font-light team2:mb-3 mb-2 dark:text-stone-300">Become a member of Inefan — a dynamic, student-founded nonprofit dedicated to rigorous, independent economic and financial analysis. </div>

            {/* Buttons */}
            <div className="flex gap-7 items-center team2:mt-4 mt-2">
              <button className="rounded-full team2:px-8 px-6 team2:py-1.5 py-1 team2:text-lg bg-stone-900 dark:bg-stone-200 dark:text-stone-900 text-stone-100 hover:dark:bg-stone-100 hover:bg-stone-800 hover:cursor-pointer w-fit transition-colors duration-150 ease-in-out">Apply now</button>

              <a href="#learn-more" className="rounded-full team2:text-lg hover:cursor-pointer w-fit transition-colors duration-150 ease-in-out">Learn more</a>

            </div>
          </div>

          {/* Image */}
          <div className="relative min-w-68 not-membershipHeroWrap:self-end">
            <img className="object-cover object-top rounded-2xl not-membershipHeroWrap:max-h-50 w-full aspect-[1.2/1]" src='/join-the-team.avif' alt="about" />
          </div>

        </div>
      </div>
    </div>

    {/* SEMINARS */}
    <div id="learn-more" className='flex-auto flex flex-col justify-start pt-25 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid gap-x-10 gap-y-4 membershipHeroWrap:grid-cols-[1fr_2fr] items-center">

          {/* Image */}
          <img className="min-w-68 rounded-2xl max-h-80 object-cover mb-5 aspect-[1.5/1] not-membershipHeroWrap:h-50 w-full" src="/seminar.avif" alt="seminar picture" />

          {/* Text */}
          <div className="min-w-68">
            <div className="team2:text-4xl text-3xl font-medium mb-2">
              Attend Seminars and Workshops on Economics
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Join members-only events where experts break down complex economic topics into real-world insights. From finance to policy to innovation, our sessions are designed to expand your understanding and challenge your thinking.
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* JOIN A TEAM */}
    <div className='flex-auto flex flex-col justify-start pt-25 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid gap-x-10 gap-y-4 membershipHeroWrap:grid-cols-[2fr_1fr] items-center">

          {/* Text */}
          <div className="min-w-68 not-membershipHeroWrap:row-start-2">
            <div className="team2:text-4xl text-3xl font-medium mb-2">
              Join a Team and Work on Real Projects
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Choose a focus area you’re passionate about—like entrepreneurship, public policy, or financial analysis—and collaborate with other members on hands-on projects that build practical skills and real experience.
            </div>
          </div>

          {/* Image */}
          <img className="min-w-68 rounded-2xl max-h-80 object-cover mb-5 aspect-[1.5/1] not-membershipHeroWrap:h-50 w-full" src="/team.avif" alt="Join a Team" />

        </div>
      </div>
    </div>

    {/* VISIT COMPANIES */}
    <div className='flex-auto flex flex-col justify-start pt-25 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid gap-x-10 gap-y-4 membershipHeroWrap:grid-cols-[1fr_2fr] items-center">

          {/* Image */}
          <img className="min-w-68 rounded-2xl max-h-80 object-cover mb-5 aspect-[1.5/1] not-membershipHeroWrap:h-50 w-full" src="/visits.avif" alt="seminar picture" />

          {/* Text */}
          <div className="min-w-68">
            <div className="team2:text-4xl text-3xl font-medium mb-2">
              Visit Companies and Learn How Business Works
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Take part in organized visits to leading companies and startups. See how professionals operate on the inside, ask questions, and understand the day-to-day realities of different industries.
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* CAREER OPPORTUNITIES */}
    <div className='flex-auto flex flex-col justify-start pt-25 mb-25 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid gap-x-10 gap-y-4 membershipHeroWrap:grid-cols-[2fr_1fr] items-center">

          {/* Text */}
          <div className="min-w-68 not-membershipHeroWrap:row-start-2">
            <div className="team2:text-4xl text-3xl font-medium mb-2">
              Connect with Top Organizations and Career Opportunities
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              We bridge the gap between learning and doing by partnering with major players in the business world. As a member, you’ll gain access to networking opportunities, internships, and direct exposure to the job market.
            </div>
          </div>

          {/* Image */}
          <img className="min-w-68 rounded-2xl max-h-80 object-cover mb-5 aspect-[1.5/1] not-membershipHeroWrap:h-50 w-full" src="/career.avif" alt="seminar picture" />

        </div>
      </div>
    </div>

    {/* CTA */}
    <div className='flex-auto flex flex-col justify-start pb-10 pt-10 mt-[-23px] px-5 bg-stone-200'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        <div className="w-full border">
          asdf
        </div>



      </div>
    </div>

  </>
}