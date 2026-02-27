import { useCreateArticleMutation, useGetCategoriesQuery } from "@/graphql/generated/schema";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { type FormEvent, useState } from "react";

export default function NewArticle() {
  const router = useRouter();
  const { data: categoriesData } = useGetCategoriesQuery();

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [mainPictureUrl, setMainPictureUrl] = useState("");
  const [body, setBody] = useState("");

  const [createArticle, { loading }] = useCreateArticleMutation({
    refetchQueries: ["GetLatestArticles"],
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = await createArticle({
      variables: {
        data: {
          title,
          body,
          mainPictureUrl,
          category: { id: Number(categoryId) },
        },
      },
    });
    const newId = result.data?.createArticle.id;
    if (newId) router.push(`/articles/${newId}`);
  }

  return (
    <Layout pageTitle="Nouvel article">
      <div className="px-4 py-8 md:max-w-2xl md:mx-auto">
        <h1 className="text-3xl font-bold mb-8">Créer un article</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold mb-1">Titre *</label>
            <input id="title" type="text" required value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Titre de l'article" />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-semibold mb-1">Catégorie *</label>
            <select id="category" required value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="select select-bordered w-full">
              <option value="">Sélectionner une catégorie</option>
              {categoriesData?.categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="picture" className="block text-sm font-semibold mb-1">URL de l'image *</label>
            <input id="picture" type="url" required value={mainPictureUrl}
              onChange={(e) => setMainPictureUrl(e.target.value)}
              className="input input-bordered w-full"
              placeholder="https://exemple.com/image.jpg" />
          </div>

          <div className="mb-6">
            <label htmlFor="body" className="block text-sm font-semibold mb-1">Contenu *</label>
            <textarea id="body" required value={body}
              onChange={(e) => setBody(e.target.value)}
              className="textarea textarea-bordered w-full h-48 md:h-64"
              placeholder="Contenu de l'article..." />
          </div>

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Enregistrer"}
          </button>
        </form>
      </div>
    </Layout>
  );
};
