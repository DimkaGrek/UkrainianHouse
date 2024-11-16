import { images } from "../assets";

export const getDevelopers = () => {
  const { developersImages } = images;
  return [
    {
      name: "Dmytro Zinkovskyi",
      url: "https://www.linkedin.com/in/dmytro-zinkovsky/",
      position: "Team leader, \n Front-end & Back-end developer",
      photos: [
        developersImages.zinkovskyi_mob_1x,
        developersImages.zinkovskyi_mob_2x,
        developersImages.zinkovskyi_desktop_1x,
        developersImages.zinkovskyi_desktop_2x,
      ],
    },
    {
      name: "Anna Zubakha",
      url: "https://www.linkedin.com/in/anna-zubakha/",
      position: "Front-end developer",
      photos: [
        developersImages.zubakha_mob_1x,
        developersImages.zubakha_mob_2x,
        developersImages.zubakha_desktop_1x,
        developersImages.zubakha_desktop_2x,
      ],
    },
    {
      name: "Yuri Kuksa",
      url: "https://www.linkedin.com/in/yurii-kuksa/",
      position: "Project Founder & Product Manager. Also Scrum Master & Front-end developer",
      photos: [
        developersImages.kuksa_mob_1x,
        developersImages.kuksa_mob_2x,
        developersImages.kuksa_desktop_1x,
        developersImages.kuksa_desktop_2x,
      ],
    },
    {
      name: "Tetiana Niukalo",
      url: "https://www.linkedin.com/in/tetiana-niukalo/",
      position: "Front-end developer",
      photos: [
        developersImages.niukalo_mob_1x,
        developersImages.niukalo_mob_2x,
        developersImages.niukalo_desktop_1x,
        developersImages.niukalo_desktop_2x,
      ],
    },
    {
      name: "Sergey Kabanets",
      url: "https://www.linkedin.com/in/serhii-kabanets/",
      position: "Front-end developer",
      photos: [
        developersImages.kabanets_mob_1x,
        developersImages.kabanets_mob_2x,
        developersImages.kabanets_desktop_1x,
        developersImages.kabanets_desktop_2x,
      ],
    },
    {
      name: "Daria Lysak",
      url: "https://www.linkedin.com/in/daria-lysak-ui-ux-designer/",
      position: "UX & UI designer",
      photos: [
        developersImages.lysak_mob_1x,
        developersImages.lysak_mob_2x,
        developersImages.lysak_desktop_1x,
        developersImages.lysak_desktop_2x,
      ],
    },
    {
      name: "Vasyl Popaz",
      url: "https://www.linkedin.com/in/vasyl-popaz/",
      position: "Front-end developer",
      photos: [
        developersImages.popaz_mob_1x,
        developersImages.popaz_mob_2x,
        developersImages.popaz_desktop_1x,
        developersImages.popaz_desktop_2x,
      ],
    },
    {
      name: "Tatiana Mihush",
      url: "https://www.linkedin.com/in/%D1%82%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-%D0%BC%D0%B8%D0%B3%D1%83%D1%88-064216269/",
      position: "Illustrator",
      photos: [
        developersImages.mihush_mob_1x,
        developersImages.mihush_mob_2x,
        developersImages.mihush_desktop_1x,
        developersImages.mihush_desktop_2x,
      ],
    },
  ];
};
