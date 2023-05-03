import { Menu, Project, } from "@/DataType/DataType";

 

export const menu:Menu[] = 
[
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 4,
        title: "About Me",
        url: "/#about-me"
    },
    {
        id: 3,
        title: "My Work",
        url: "/#my-work"
    },
    {
        id: 4,
        title: "Contact Us",
        url: "/#contact-us"
    }
];

export const projects:Project[] = [
    {
        id: 1,
        title: "Paramountbooks",
        image: "/paramountbooks.png",
        description: "Paramount Books aspires to enhance the productivity and growth of organizations around the world by providing a comprehensive range of innovative publications in the school, higher education, medical, management, digital resources and children activity",
        link: "https://paramountbooks.com.pk/"
    },
    {
        id: 2,
        title: "Emkaylines",
        image: "/emkayline.png",
        description: "Over the past three decades, the group has created a specific niche for itself in the shipping industry by committing to customer quality standards and by exhibiting adamant efficiency in all facets of its service operations across many parts of the globe.",
        link: "https://emkayline.com/"
    },
    {
        id: 3,
        title: "Pac Marine",
        image: "/pacmarine.png",
        description: "PacMarine Services is a marine and tanker consultancy and surveying firm, offering consultancy services primarily to Oil Majors, Charterers, Shipowners, P&I clubs, Underwriters, Lawyers, Loss Adjusters and the Chemical Distribution Institute (CDI).",
        link: "https://www.pacmarine.com/"
    }
]




