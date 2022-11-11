interface upcoming{
    day: string,
    condition: string,
    conditionName: string
}

interface weather{
       lon: string,
        lat: string,
        condition: string,
        conditionName: string,
        temperature: number,
        unit: string,
        location: string,
        upcomming: Array<upcoming>
}

export default weather;