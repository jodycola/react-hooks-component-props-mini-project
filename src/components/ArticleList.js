import Article from "./Article";

function ArticleList({ articles }) {
    const article = articles.map(article => {
       return <Article key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview} />
    })
    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList