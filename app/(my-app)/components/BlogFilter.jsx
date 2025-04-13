'use client'

import { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'


export default function BlogFilter({ selectedFilters }) {


  const router = useRouter()
  const pathname = usePathname()

  // 'selected' is an array of the selected filters
  const [selected, setSelected] = useState(selectedFilters);

  function arrayToQueryString(arr) {
    const query = arr.map(value => `category=${encodeURIComponent(value)}`).join("&");
    if (query)
      return '?' + query
    else
      return ""
  }

  function toggleCategory(category) {
    setSelected(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  useEffect(() => {
    const newUrl = pathname + arrayToQueryString(selected);
    console.log(newUrl);
    // Only replace the URL if it's different
    if (newUrl !== window.location.pathname + window.location.search) {
      router.replace(newUrl, { scroll: false });
    }
  }, [selected]);

  const isToggled = (category) => {
    return selected.includes(category) ? 'bg-stone-300 dark:bg-stone-800' : 'bg-stone-200 dark:bg-stone-900 active:bg-[#dbdad8] hover:bg-[#dbdad8] dark:hover:bg-stone-800 dark:active:bg-stone-800'
  }

  return (
    <div className='flex gap-2 overflow-x-auto items-center justify-between pb-2'>
      <div className="flex items-center dark:bg-stone-900 bg-stone-200 py-1 px-1 rounded-full">

        <div className={`${isToggled('economics')} mr-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-200`} onClick={() => toggleCategory("economics")}>Economics</div>
        <div className={`${isToggled('international')} mr-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-200`} onClick={() => toggleCategory("international")}>International</div>
        <div className={`${isToggled('financial')} mr-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-200`} onClick={() => toggleCategory("financial")}>Financial</div>
        <div className={`${isToggled('business')} border-stone-200 dark:border-stone-800 px-3 py-1 rounded-full cursor-pointer transition-all duration-200`} onClick={() => toggleCategory("business")}>Business</div>

        <div className={`text-sm cursor-pointer transition-all duration-400 ease-in-out ${selected.length ? 'ml-0.5 max-w-20 w-fit px-2 opacity-40 dark:opacity-50 hover:opacity-80 active:opacity-80 dark:hover:opacity-90 dark:active:opacity-90' : 'px-0 max-w-0 overflow-hidden opacity-0'}`} onClick={() => setSelected([])}>Clear</div>

      </div>
      <input id='search' className='transition-all duration-200 ease-in-out text-sm bg-stone-200 dark:bg-stone-900 rounded-full px-3.5 py-1.5  border-stone-800 focus:outline-0 focus:dark:bg-stone-800 focus:bg-stone-300' type="text" placeholder='Search' />
    </div>

  )
}
