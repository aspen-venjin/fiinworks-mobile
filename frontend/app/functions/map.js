const getDecimalFromPercentage = ( value ) => parseInt(value.slice(0, -1))/100

const getIndentifier = ( arr ) => arr.map( item => item.identifier )

// MALAYSIA REGION
const defaultRegion = {
    latitude: 4.0080,
    longitude: 102.1811,
    latitudeDelta: 3.700,
    longitudeDelta: 3.700
}

// MID VALLEY REGION
const midValleyRegion = {
    latitude: 3.1175,
    longitude: 101.6774,
    latitudeDelta: 0.050,
    longitudeDelta: 0.050
}

export{
    defaultRegion,
    getDecimalFromPercentage,
    getIndentifier,
    midValleyRegion
}