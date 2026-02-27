import Link from "next/link";
import { useRouter } from "next/router";
import { type FormEvent, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (search.trim() === "") return;
    router.push(`/search?q=${search}`);
  }

  return (
    <header className="navbar bg-base-200 px-4">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-primary">
          Dev Blog
        </Link>
      </div>
      <div className="navbar-end">
        <form onSubmit={handleSearch} role="search" className="flex gap-2">
          <label htmlFor="search-input" className="sr-only">
            Rechercher un article
          </label>
          <input
            id="search-input"
            type="search"
            placeholder="Recherche..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered input-sm"
          />
          <button type="submit" className="btn btn-sm btn-primary" aria-label="Lancer la recherche">
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}
