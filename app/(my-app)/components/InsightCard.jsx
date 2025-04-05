import Link from "next/link"

export default function InsightCard({ title, category, date, picture, slug }) {

  return (
    <Link href={'/insights/' + slug} className='cursor-pointer max-w-79 min-w-70 h-full'>

      {/* Container */}
      <div className='group flex flex-col h-full rounded-4xl bg-white dark:bg-stone-900'>

        {/* 1. Photo */}
        <div className="h-43 min-h-43 overflow-hidden rounded-tl-4xl rounded-tr-4xl">
          <img className='size-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.03] group-active:scale-[1.03] will-change-transform' src={picture} />
        </div>


        {/* 2. Description */}
        <div className="flex flex-col px-8 py-5 h-full">
          <span className='w-fit font-semibold text-sm dark:text-stone-400 text-stone-500'>{category}</span>
          <span className='w-fit font-semibold text-2xl pt-1'>{title}</span>
          <span className='w-fit font-medium pt-3 mt-auto dark:text-stone-400 text-stone-500'>{date}</span>
        </div>

      </div>

    </Link>
  )
}