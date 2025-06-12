import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Estadísticas",
            url: "#stats"
        },
        {
            text: "Nosotros",
            url: "#features"
        },

        {
            text: "Productos",
            url: "#products"
        },
        {
            text: "Reseñas",
            url: "#testimonials"
        }
    ],
    telephone: '+57 3017060506',
    socials: {
        instagram: 'https://www.instagram.com/sanandest/',
        tiktok: 'https://www.tiktok.com/@sanandest',
        facebook: 'https://www.facebook.com/profile.php?id=61568434589575&mibextid=qi2Omg&rdid=dyhljb1BafM43pE9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Af1Srd2wP%2F%3Fmibextid%3Dqi2Omg',
    }
}