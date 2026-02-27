import Link from "next/link";

interface ArticleCardProps {
  id: number;
  title: string;
  mainPictureUrl: string;
}

export default function ArticleCard({ id, title, mainPictureUrl }: ArticleCardProps) {
  return (
    <Link href={`/articles/${id}`}>
      <div className="card bg-base-100 shadow hover:shadow-lg cursor-pointer">
        <figure>
          <img src={mainPictureUrl} alt={title} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-sm">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
