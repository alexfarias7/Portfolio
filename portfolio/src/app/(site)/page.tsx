import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";

export default async function Home() {
  const homepage = await getHomePage();

  return (
    <>
      <h1 className="text-[25px] text-red-50">Pagina inicial</h1>
      <p className="text-blue1 text-[40px] bg-red-50 cursor-pointer w-[300px] font-popins">
        {homepage.nameHero}
      </p>
    </>
  );
}
