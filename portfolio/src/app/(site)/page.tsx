import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";

export default async function Home() {
  const homepage = await getHomePage();

  return (
    <>
      <h1>Pagina inicial</h1>
      <p>{homepage.nameHero}</p>
    </>
  );
}
