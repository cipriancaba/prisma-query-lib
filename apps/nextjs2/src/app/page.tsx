import { prisma } from "@acme/db/client";

// export const runtime = "edge";

const getData = async () => {
  return await prisma.address.findMany();
};

export default async function HomePage() {
  const articles = await getData();

  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-pink-400">T3</span> Turbo
        </h1>

        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <div key={article.id}>
              <h2>{article.city}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
