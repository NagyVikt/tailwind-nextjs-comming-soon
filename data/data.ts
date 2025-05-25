const currentYear = new Date().getFullYear();
const data = {
    sitename: "Ranked.hu",
    sitetagline: "Valami nagyszerű van készülőben!",
    siteurl: "https://ranked.hu",
    sitelogo: "",
    title: "Hamarosan!",
    description: "Jelenleg keményen dolgozunk azon, hogy valami nagyszerűt hozzunk létre, és alig várjuk, hogy megoszthassuk veled. Csapatunk az utolsó simításokat végzi egy új projekten 🚀, amelyről úgy gondoljuk, hogy imádni fogod 😍.",
    newsletterheading: "Maradj velünk élő frissítéseinkért!",
    copyrightText: `Copyright © ${currentYear} Ranked.hu. Minden jog fenntartva.`,
    socialIconsHeading: "Kövess minket 📣",
    hideSubscribeForm: false, // állítsd 'true'-ra a feliratkozási űrlap letiltásához
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/sandeep.baikare/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/BaikareSandeep",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/sandip-baikare/",
        },
    ],
    hide :{
        subscribeForm: true, // állítsd 'true'-ra a feliratkozási űrlap letiltásához
        header: true,
        content: false,
        footer: false,
    }
}

export default data;