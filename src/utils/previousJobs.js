import Constructores from "../assets/images/constructores.webp";
import Ferreteros from "../assets/images/ferreteros.webp";
import Sidoc from "../assets/images/sidoc.webp";
import Letsdoitnow from "../assets/images/letsdoitnow.webp";

export const previousJobs = [
    {
        company: "Let's Do It Now",
        dates: ["09-15-2023", "09-15-2024"],
        en: {
            title: "Full Stack Web Developer",
            description:
                "Administration and maintenance of 2 main marketplaces, Constructores and Ferreteros. Projects own by SIDOC, which is the 4th largest steel producer in Colombia, dedicated to producing long and corrugated steels used in construction and industrial applications.",
        },
        es: {
            title: "Desarrollador Web Full Stack",
            description:
                "Desarrollé y mantuve aplicaciones del lado del cliente, gestionando una integración fluida entre el frontend y el backend, así como con APIs externas o servicios web.",
        },
        images: [Constructores, Ferreteros, Sidoc, Letsdoitnow],
    },
];
