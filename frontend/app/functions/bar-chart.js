const getFirstIndexInc = num => parseInt(String(Math.floor( num ))[0]) + 1;

const getMax = ( arr ) => {
    return Math.max(...arr.map( item => item.data.reduce((acc, item) => Math.max( item.amount ), 0)));
}

const getPlaces = num => String(Math.floor( num )).length;

const getQuarterData = ( arr, type ) => {
    return arr.map(( item ) => {
        return item.data.map(( elem ) => {
            return {
                ...JSON.parse(JSON.stringify( elem )),
                month: item.month
            };
        });
    })
    .reduce(( acc, item ) => [ ...acc, ...item ], [])
    .filter(( item ) => item.type === type)
    .map(( item ) => `${item.month}: ${item.amount}`);
}

const getSize = arr => {
    const type_no = arr[0].data.length;
        
    const max = {
        size: 0.08,
        font: 13
    };
    
    return {
        size: parseFloat(max.size - type_no/100).toFixed(2),
        font: max.font - type_no
    };
}

const zeroFill = ( num, places ) => String( num ).padEnd( places, '0' );

export{
    getFirstIndexInc,
    getMax,
    getPlaces,
    getQuarterData,
    getSize,
    zeroFill
};