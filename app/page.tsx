import { getImages } from "./actions/getImages";
import { ImageCardContainer } from "./components/ImageCardContainer";

export default async function Home() {
  const cards = await getImages({
    pageParam: 1,
    pageSize: Number(process.env.NEXT_PUBLIC_PAGE_SIZE),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <ImageCardContainer images={cards} />
    </main>
  );
}
