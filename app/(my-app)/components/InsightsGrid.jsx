// import { articles } from "../assets/database"
import InsightCard from "./InsightCard"
import { getPayload } from "payload"
import config from '../../../payload.config'; // Static import

export default async function InsightsGrid() {

  const payload = await getPayload({ config })

  // Fetch all posts
  const articles = await payload.find({
    collection: 'articles',
    sort: '-date', // Newest first
  });

  const displayArticles = () => {
    if (articles.docs.length) {
      return articles.docs.map(article =>
        < InsightCard
          key={article.id}
          category={article.category.toUpperCase()}
          title={article.title}
          picture={article.image.url}
          date={new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          slug={article.slug}
        />)
    }
    else
      return <div className='max-w-79 min-w-79 h-full text-lg opacity-80'>No articles found.</div>
  }

  return (
    <div className='mt-10 grid grid-cols-1 team2:grid-cols-2 team3:grid-cols-3 gap-10 min-w-70 team2:min-w-168 team3:min-w-257 transition-opacity duration-400'>
      {displayArticles()}
    </div>
  )
}