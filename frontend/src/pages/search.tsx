import { useSearchArticlesQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import ArticleCard from "@/components/ArticleCard";
import Layout from "@/components/Layout";

export default function Search() {
    const router = useRouter();
    const q = router.query.q as string || ""; // Récupère le paramètre de recherche "q" depuis l'URL
    const { data, loading, error } = useSearchArticlesQuery({
        variables: { title: q },
        skip: !q, // Ne pas exécuter la requête si "q" est vide
        fetchPolicy: "network-only", // recup les données fraiche
    });

  return (
    <Layout pageTitle="Recherche">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Résultats de la recherche</h1>

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
        </div>
    </Layout>
  );
}
