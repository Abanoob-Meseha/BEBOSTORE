import { FeatureType } from "@/types"
import Feature from "../Feature/Feature"
import SectionTitle from "../SectionTitle/SectionTitle"

const features: FeatureType[] = [
    {
        src : "/featuresImgs/truck.gif",
        title: "Fast Delivered"
    },
    {
        src : "/featuresImgs/checklist.gif",
        title: "Organized"
    },
    {
        src : "/featuresImgs/calendar.gif",
        title: "On Time"
    },
]
const FeatureSection = () => {
  return (
    <div className="text-center mt-16">
        <SectionTitle>With us your order is: </SectionTitle>
        <div className="flex flex-col items-center justify-center mt-8 md:flex-row md:mx-auto gap-10">
            {
                features.map((feature , index)=>{
                    return(
                        <Feature src={feature.src} title={feature.title} key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FeatureSection