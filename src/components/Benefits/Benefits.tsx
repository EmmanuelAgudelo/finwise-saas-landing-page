import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="feature" className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="sr-only">Features</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits