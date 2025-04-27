import Link from "next/link";
import Image from "next/image";
import { getPayload } from "payload";
import config from "../../payload.config";
import Newsletter from "./components/Newsletter";

export default async function HomePage() {

  const payload = await getPayload({ config })
  const reportsDoc = await payload.find({
    collection: 'weeklyReports',
    limit: 1
  })

  const reports = reportsDoc.docs

  // const serverTimestamp = new Date().toISOString();
  // console.log(`Built '/' at [${serverTimestamp}]`);


  return (
    <>
      <div className="flex flex-auto justify-center items-center team2:px-5 mb-5">
        <div
          className={`grid team3:grid-cols-2 w-full gap-5 transition-opacity duration-400`}
        >
          {/* <p className="text-sm text-gray-500">Server render: {serverTimestamp}</p> */}

          {/* Become a member */}
          <div className="min-w-[310px] relative h-80 bg-stone-500 team2:hover:scale-[1.01] team2:active:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform team3:col-span-2">
            {/* Image */}
            <Image className="object-cover size-full" src="/member.jpg" alt="Become a member" fill priority />

            <div className="absolute top-0 left-0 size-full team2:p-10 p-8 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 active:backdrop-brightness-110 cursor-default text-white backdrop-blur-xs">
              {/* Heading */}
              <span className="team2:text-5xl text-4xl text-center font-semibold">
                Εγγραφή μέλους
              </span>
              {/* Subheading */}
              <span className="team2:text-2xl text-xl text-center max-w-2xl">
                Ενδιαφέρεσαι να αναπτύξεις τις ικανότητες σου και να συμμετέχεις
                ενεργά στην ομάδα μας;
              </span>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <Link
                  href="/membership"
                  className="border border-stone-200 bg-stone-200 hover:bg-stone-100 active:bg-stone-100 hover:border-stone-100 active:border-stone-100 text-stone-900 py-1.5 px-4 rounded-full cursor-pointer transition-colors duration-150 ease-in-out min-w-max"
                >
                  Μάθε περισσότερα
                </Link>
                <Link
                  href="/membership/join"
                  className="border border-stone-100 bg-transparent active:bg-stone-100 hover:bg-stone-100 hover:text-stone-900 active:text-stone-900 py-1.5 px-4 rounded-full cursor-pointer transition-colors duration-150 ease-in-out min-w-max"
                >
                  Γίνε μέλος
                </Link>
              </div>
            </div>
          </div>

          {/* Financial Reports */}
          <div className="min-w-[310px] relative h-80 bg-stone-300 team2:hover:scale-[1.01] team2:active:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform">
            <Image className="object-cover size-full" src="/stock.jpg" alt="Read our reports" fill priority />
            <div className="absolute top-0 left-0 size-full team2:p-10 p-8 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-default text-white backdrop-blur-xs">
              <span className="team2:text-5xl text-4xl text-center font-semibold">
                Financial Reports
              </span>
              <span className="team2:text-2xl text-xl text-center">
                Εβδομαδιαίες ενημερώσεις δεικτών και χρηματιστηριακών εξελίξεων
              </span>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-5">
                <Link
                  href="/reports"
                  className="border border-stone-200 bg-stone-200 hover:bg-stone-100 active:bg-stone-100 text-stone-900 py-1.5 px-4 rounded-full cursor-pointer transition-colors duration-150 ease-in-out min-w-max"
                >
                  Δες τα reports
                </Link>
                {reports[0] ? (<Link
                  href={reports[0].reportFile.url}
                  className="border border-stone-100 bg-transparent hover:bg-stone-100 hover:text-stone-900 active:bg-stone-100 active:text-stone-900 py-1.5 px-4 rounded-full cursor-pointer transition-colors duration-150 ease-in-out min-w-max"
                >
                  Τελευταίο Report
                </Link>) : null}

              </div>
            </div>
          </div>

          {/* Inefan Insights */}
          <div className="min-w-[310px] relative h-80 bg-stone-400 team2:hover:scale-[1.01] team2:active:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform">
            <Image className="object-cover size-full" src="/insights.jpg" alt="Check out our articles" fill priority />
            <div className="absolute top-0 left-0 size-full team2:p-10 p-8 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-default text-white backdrop-blur-xs">
              <span className="team2:text-5xl text-4xl text-center font-semibold">
                Inefan Insights
              </span>
              <span className="team2:text-2xl text-xl text-center">
                Επίκαιρα άρθρα από την ομάδα αρθρογραφίας της Inefan.

              </span>
              {/* Buttons */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <Link
                  href="/insights"
                  className="border border-stone-200 bg-stone-200 hover:bg-stone-100 hover:border-stone-100 active:bg-stone-100 active:border-stone-100 text-stone-900 py-1.5 px-4 rounded-full cursor-pointer transition-colors duration-150 ease-in-out min-w-max"
                >
                  Δες τα άρθρα
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  )
}