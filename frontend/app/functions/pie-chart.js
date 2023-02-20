import type_colors from "../config/type_colors";

const getColorScale = arr => arr.map( item => item.color);

const getDistinctClaimTypes = ( arr ) => {
    return [...new Set(arr.map(( item ) => item.claim_type))];
}

const getDistinctClaimTypesCount = ( arr ) => {
    return [...new Set(arr.map(( item ) => item.claim_type))].length;
}

const getLumaScale = ( hex ) => {
    let rgb = parseInt(hex.substring(1), 16);
    let red = (rgb >> 16) & 0xff;
    let green = (rgb >>  8) & 0xff;
    let blue = (rgb >>  0) & 0xff;
    
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

const getSelectedName = ( arr, name ) => {
    return JSON.parse(
                JSON.stringify( arr ))
                    .filter( item => item.name == name )[0]
}

const getSortedPieData = ( arr ) => {
    let map = new Map();
    arr.forEach(
        ( item ) => map.set(item.claim_type, (parseFloat(map.get( item.claim_type ) || 0) + parseFloat( item.amount )
    ).toFixed(2)));
    
    return Object.entries(Object.fromEntries( map ))
        .map(([ key, value ]) => {
            return {
                label: `${((parseFloat( value )/parseFloat(getTotalAmount( arr ))*100).toFixed(2))}%`,
                name: key,
                y: parseFloat(value)
            };
        })
        .sort(( first , second ) => parseFloat(first.label) - parseFloat(second.label))
        .map(( item, index ) => {
            return {
                color: type_colors.pie[index],
                ...item
            }
        });
}

const getTotalAmount = ( arr ) => {
    return parseFloat(arr.reduce(( acc, item ) => acc + item.amount, 0)).toFixed(2);
}

const isBrightColor = hex => getLumaScale( hex ) > 210? true : false;

export{
    getColorScale,
    getDistinctClaimTypes,
    getDistinctClaimTypesCount,
    getSelectedName,
    getSortedPieData,
    getTotalAmount,
    isBrightColor
}