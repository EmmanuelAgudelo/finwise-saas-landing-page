import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "50K+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Clientes satisfechos alrededor de colombia, respaldando nuestra calidad y estilo."
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Calificación promedio en reseñas, gracias a nuestra atención al detalle y servicio."
    },
    {
        title: "100+",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Modelos de alta gama disponibles, inspirados en las marcas más icónicas del mundo."
    }
];