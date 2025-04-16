// import { articles } from '../../assets/database';
import Custom404 from '../../not-found'
import { getPayload } from "payload"
import config from '../../../../payload.config'; // Static import
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';


export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const articles = await payload.find({
    collection: 'articles',
    limit: 1000, // Adjust as needed
  });

  return articles.docs.map((article) => ({
    slug: article.slug,
  }));
}

export default async function SingleInsight({ params }) {


  const { slug } = await params
  const payload = await getPayload({ config })

  // Fetch post
  const articleDoc = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
  });

  const article = articleDoc.docs[0]

  // If no article found, return 404
  if (!article) {
    return <Custom404 />;
  }
  // console.log(article);

  const content = convertLexicalToHTML({ data: article.content });

  // const serverTimestamp = new Date().toISOString();
  // console.log(`Built '/insights/${slug}' at [${serverTimestamp}]`);

  return (
    <>
      {
        <div className="flex flex-col flex-auto px-5 pb-10">
          <div className="flex flex-col size-full max-w-5xl mx-auto">
        {/* <p className="text-sm text-gray-500">Server render: {serverTimestamp}</p> */}

            {/* Back Button */}
            {/* <Link to="/insights" className='mb-3 w-fit'>Back</Link> */}

            {/* Page Header */}
            <div className="flex flex-col max-w-2xl mx-auto mt-10">

              {/* Category */}
              <span className='font-medium text-sm mb-1 dark:text-stone-400 text-stone-600'>{article.category.toUpperCase()}</span>

              {/* Date */}
              <span className='font-medium text-sm mb-6 dark:text-stone-400 text-stone-600'>{new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>

              {/* Title */}
              <span className='font-bold team3:text-5xl text-4xl mb-6'>{article.title}</span>

              {/* Subtitle */}
              <span className='team3:text-2xl text-xl mb-14'>{article.subtitle}</span>

            </div>

            {/* Photo */}
            <div className="w-full team2:h-100 h-70 overflow-hidden rounded-xl mb-5">
              <img src={article.image.url} alt="" className='object-cover size-full' />
            </div>

            {/* Article Content */}
            <div className="flex flex-col max-w-2xl mx-auto mt-10">
              <span className='team3:text-lg text-base mb-14' dangerouslySetInnerHTML={{ __html: content }} />
            </div>

          </div>
        </div>
      }
    </>
  )
}