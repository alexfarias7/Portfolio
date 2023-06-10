import Hero from "@/components/pages/home/herosection/Index";
import WhatIDo from "@/components/pages/home/whatido/Index";
import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";

export default async function Home() {
  const homepage = await getHomePage();

  return (
    <>
      <Hero hero={homepage} />
      <WhatIDo />
      <h1 className="text-[25px] text-red-50 mt-[200px]">Pagina inicial</h1>
      <p className="text-blue1 text-[40px] bg-red-50 cursor-pointer w-[300px] font-popins">
        {homepage.nameHero}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        nesciunt atque doloremque explicabo sapiente, consequatur ut? Aliquam
        voluptas, ducimus neque officiis molestias recusandae modi corporis
        deserunt iste? Fugiat, deleniti cupiditate!
      </p>
    </>
  );
}
