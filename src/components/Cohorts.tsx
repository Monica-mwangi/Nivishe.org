import { useState } from "react"
import Cohort4 from "../data/cohort-4.json"

const data = {
    'Cohort 4': Cohort4,
    'Cohort 3': [],
    'Cohort 2': [],
    'Cohort 1': [],
}
export default function Cohorts() {
    const [names, setNames] = useState<string[]>(Cohort4)
    const [cohort, setCohort] = useState<string>("Cohort 4")
    return (
        <div>
            <div className="mt-8 flex justify-center gap-x-4">
                {Object.entries(data).map(([cohortLabel, cohortNames]) => <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300" key={cohortLabel} onClick={() => {
                    setNames(cohortNames)
                    setCohort(cohortLabel)
                    }}>{cohortLabel}</button>)}
            </div>
            <div className="mt-6 p-6 bg-white rounded-lg shadow-md min-h-[40px] max-h-[300px] overflow-y-auto">
                <p className="font-bold mb-4 text-center">{cohort}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {names.map((name,index) => <div key={index} className="p-1 hover:bg-gray-50 rounded">{name}</div>)}
                </div>
            </div>
        </div>
    )
}