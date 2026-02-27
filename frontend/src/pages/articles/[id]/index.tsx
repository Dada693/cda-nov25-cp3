import { useDeleteArticleMutation, useGetArticleQuery } from "@/graphql/generated/schema";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function ArticleDetail() {
  const router = useRouter();
  const id = Number(router.query.id);

  const { data, loading, error } = useGetArticleQuery({
    variables: { id },
    skip: !id,
  });

  const [deleteArticle] = useDeleteArticleMutation({
    refetchQueries: ["GetLatestArticles"],
  });

  async function handleDelete() {
    if (!window.confirm("Confirmes-tu la suppression de cet article ?")) return;
    await deleteArticle({ variables: { id } });
    router.push("/");
  }

  const article = data?.article;

  return (
    <Layout pageTitle={article?.title ?? "Article"}>
      {loading && <span className="loading loading-spinner" aria-label="Chargement..."></span>}
      {error && <p className="text-error">Erreur : {error.message}</p>}

      {article && (
        <article className="max-w-3xl mx-auto px-4 py-8">
          {article.category && (
            <span className="badge badge-primary mb-2">{article.category.name}</span>
          )}

          <h1 className="text-3xl font-bold mt-2 mb-2">{article.title}</h1>

          <p className="text-sm text-gray-500 mb-6">
            Publié le {new Date(article.createdAt).toLocaleDateString("fr-FR")} ·{" "}
            Mis à jour le {new Date(article.updatedAt).toLocaleDateString("fr-FR")}
          </p>

          <img
            src={article.mainPictureUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <p className="leading-relaxed whitespace-pre-wrap">{article.body}</p>

          <div className="mt-8">
            <button onClick={handleDelete} className="btn btn-error">
              Supprimer l'article
            </button>
          </div>
        </article>
      )}
    </Layout>
  );
}
