import { FeatureType } from "@/types"
import Image from "next/image"

const Feature = (props : FeatureType) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-[70%] md:w-[25%] border-4 border-blue-950">
        <Image src={props.src} alt="Focus img" layout="responsive" width={50} height={50}/>
        <h1 className="text-2xl text-blue-950 font-bold">{props.title}</h1>
    </div>
  )
}

export default Feature