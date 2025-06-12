import { FiBarChart2, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Bienvenido a San&Est",
        description: "Descubre la combinación perfecta de estilo, calidad y accesibilidad en lo mejor de lo mejor. Nuestros relojes están diseñados para destacar, sin comprometer tu presupuesto y tu estilo.",
        bullets: [
            {
                title: "Calidad Garantizada",
                description: "Fabricados con diseño elegante y de marcas increíblemente buenas y conocidas , nuestros relojes ofrecen estilo y belleza visual.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Precio Justo",
                description: "Obtén lo mejor sin pagar de más. Relojes asequibles que no sacrifican la calidad ni el estilo y mejor cuando hablamos de lo increíble que es visualmente.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Servicio Confiable",
                description: "Atención al cliente dedicada, con garantía incluida y soporte postventa que te acompaña, incluyendo la asesoría de quienes buscan conocer su estilo y lo que mejor deseen.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/imagen-1-section.jpg"
    },
]