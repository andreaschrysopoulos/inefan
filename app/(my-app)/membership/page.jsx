export default function MembershipPage() {

  if (typeof window !== "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
  }

  return <>
    {<style>{`
        html { scroll-behavior: smooth; }
      `}</style>}
    {/* HERO */}
    <div className='flex-auto flex flex-col justify-start pb-15 pt-15 mt-[-23px] px-5 bg-stone-200 dark:bg-stone-900'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid gap-x-10 gap-y-6 membershipHeroWrap:grid-cols-[2fr_1.3fr] grid-cols-1 items-center">

          {/* Text */}
          <div className="flex flex-col min-w-68 not-membershipHeroWrap:row-start-2 not-membershipHeroWrap:self-start">
            <div className="text-blue-500 team2:text-lg font-medium team2:mb-2 mb-1">Εγγραφή Μέλους</div>
            <div className="team2:text-6xl text-5xl font-medium team2:mb-3 mb-1.5">Γίνε μέλος του Inefan!</div>
            <div className="team2:text-xl text-lg font-light team2:mb-3 mb-2 dark:text-stone-300">Το Inefan είναι μια δυναμική, φοιτητική, μη κερδοσκοπική πρωτοβουλία που προάγει την ανεξάρτητη ανάλυση στην οικονομία και τα χρηματοοικονομικά.</div>

            {/* Buttons */}
            <div className="flex gap-7 items-center team2:mt-4 mt-2">
              <button className="rounded-full team2:px-8 px-6 team2:py-1.5 py-1 team2:text-lg bg-stone-900 dark:bg-stone-200 dark:text-stone-900 text-stone-100 hover:dark:bg-stone-100 hover:bg-stone-800 hover:cursor-pointer w-fit transition-colors duration-150 ease-in-out">Κάνε αίτηση τώρα</button>

              <a href="#learn-more" className="rounded-full team2:text-lg hover:cursor-pointer w-fit transition-colors duration-150 ease-in-out">Μάθε περισσότερα</a>

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
              Σεμινάρια και Workshops: Από τη θεωρία στην πράξη
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Πάρε μέρος σε αποκλειστικές εκδηλώσεις όπου καταξιωμένοι επαγγελματίες «αποδομούν» πολύπλοκα οικονομικά ζητήματα και τα μετατρέπουν σε πρακτική γνώση.
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
              Δούλεψε πάνω σε πραγματικά projects
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Διάλεξε την ομάδα που σε ενθουσιάζει — Marketing, HR, Financial Analysis, Project Mangement, Editorial και συνεργάσου με άλλα μέλη σε projects που χτίζουν ουσιαστικές δεξιότητες και αφήνουν πραγματικό αποτύπωμα.
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
              Γνώρισε από κοντά τον κόσμο των επιχειρήσεων
            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Μπες στα άδυτα κορυφαίων εταιρειών και ανερχόμενων startups μέσα από οργανωμένες επισκέψεις. Δες πώς λειτουργούν τα πράγματα από μέσα, κάνε τις σωστές ερωτήσεις και πάρε πολύτιμες εμπειρίες από πρώτο χέρι.
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
              Δικτύωση και Καριέρα: Άνοιξε τις σωστές πόρτες

            </div>

            <div className="mb-5 font-light team2:text-lg text-base">
              Μέσα από τις συνεργασίες μας με ηγέτες της αγοράς, σου δίνουμε πρόσβαση σε networking ευκαιρίες, πρακτικές ασκήσεις και real-world προοπτικές καριέρας. Στόχος μας: να συνδέσουμε τη μάθηση με την επαγγελματική δράση.
            </div>
          </div>

          {/* Image */}
          <img className="min-w-68 rounded-2xl max-h-80 object-cover mb-5 aspect-[1.5/1] not-membershipHeroWrap:h-50 w-full" src="/career.avif" alt="seminar picture" />

        </div>
      </div>
    </div>

    {/* CTA */}
    <div className='flex-auto flex flex-col justify-start pb-10 pt-10 mt-[-23px] px-5 bg-stone-200 dark:bg-stone-900'>
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-10">

        <div className="flex flex-col min-w-68 items-start max-w-2xl">
          <div className="team2:text-6xl text-5xl font-medium team2:mb-3 mb-1.5">Γίνε μέλος του Inefan!</div>

          <div className="team2:text-xl text-lg font-light team2:mb-7 mb-3 dark:text-stone-300">Το Inefan είναι μια δυναμική, φοιτητική, μη κερδοσκοπική πρωτοβουλία που προάγει την ανεξάρτητη ανάλυση στην οικονομία και τα χρηματοοικονομικά.</div>

          <button className="h-fit min-w-max rounded-full team2:px-8 px-6 team2:py-1.5 py-1 team2:text-lg bg-stone-900 dark:bg-stone-200 dark:text-stone-900 text-stone-100 hover:dark:bg-stone-100 hover:bg-stone-800 hover:cursor-pointer w-fit transition-colors duration-150 ease-in-out">Κάνε αίτηση τώρα</button>

        </div>
      </div>
    </div>

  </>
}