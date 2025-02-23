import { FeatureType } from "@/types"
import Feature from "../Feature/Feature"

const features: FeatureType[] = [
    {
        src : "/featuresImgs/target.gif",
        title: "To the Target"
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
        <h1 className="text-3xl font-bold text-blue-950">Your Work will be: </h1>
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