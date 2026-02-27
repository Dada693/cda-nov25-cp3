import { useGetLatestArticlesQuery } from "@/graphql/generated/schema";
import ArticleCard from "@/components/ArticleCard";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
const { data, loading, error } = useGetLatestArticlesQuery({
  variables: { limit: 5 },
  fetchPolicy: "network-only", // recup les données fraiche
});

  return (
    <Layout pageTitle="Accueil">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Derniers Articles</h1>

        {loading && <span className="loading loading-spinner" aria-label="Chargement..."></span>}
        {error && <p className="text-error">Erreur : {error.message}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {data?.articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              mainPictureUrl={article.mainPictureUrl}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/articles/new" className="btn btn-primary">
            ✏️ Créer un nouvel article
          </Link>
        </div>
      </div>
    </Layout>
  );
}
