import { articles } from '../../assets/database';
import Custom404 from '../../not-found'

export default async function SingleInsight({ params }) {
  const { slug } = await params


  let article;
  articles.forEach(art => {
    // console.log(art.slug)
    if (art.slug === slug) {
      article = art;
      return;
    }
  });

  return (
    <>
      {
        !article ? <Custom404 /> :
          <div className="flex flex-col flex-auto px-5 pb-10">
            <div className="flex flex-col size-full max-w-5xl mx-auto">

              {/* Back Button */}
              {/* <Link to="/insights" className='mb-3 w-fit'>Back</Link> */}

              {/* Page Header */}
              <div className="flex flex-col max-w-2xl mx-auto mt-10">

                {/* Category */}
                <span className='font-medium text-sm mb-1 dark:text-stone-400 text-stone-600'>{article.category.toUpperCase()}</span>

                {/* Date */}
                <span className='font-medium text-sm mb-6 dark:text-stone-400 text-stone-600'>{article.date}</span>

                {/* Title */}
                <span className='font-bold team3:text-5xl text-4xl mb-6'>{article.title}</span>

                {/* Subtitle */}
                <span className='team3:text-2xl text-xl mb-14'>{article.subtitle}</span>

              </div>

              {/* Photo */}
              <div className="w-full team2:h-100 h-70 overflow-hidden rounded-xl mb-5">
                <img src={article.picture} alt="" className='object-cover size-full' />
              </div>

              {/* Article Content */}
              <div className="flex flex-col max-w-2xl mx-auto mt-10">
                <span className='team3:text-lg text-base mb-14'>{article.content}</span>
              </div>

            </div>
          </div>
      }
    </>
  )
}