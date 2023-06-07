const homeSchame = {
  name: "homepage",
  title: "HomePage",
  type: "document",
  fields: [
    { name: "greetingHero", title: "GreetingHero ", type: "string" },
    { name: "nameHero", title: "NameHero", type: "string" },
    { name: "lastName", title: "LastNameHero", type: "string" },
    { name: "apresetationHero", title: "ApresetationHero", type: "string" },
    { name: "occupationHero", title: "OccupationHero", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default homeSchame;
