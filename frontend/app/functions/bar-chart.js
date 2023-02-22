import type_colors from "../config/type_colors";
import { getDistinctClaimTypesCount } from "./pie-chart";

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const getDistinctClaimTypesCountLimit = ( arr ) => getDistinctClaimTypesCount( arr ) > 5? 5 : getDistinctClaimTypesCount( arr );

const getFirstIndexInc = num => parseInt(String(Math.floor( num ))[0]) + 1;

const getMax = ( arr ) => {
    return Math.max(...arr.map( item => Math.max(...item.data.map(elem => elem.amount))));
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

const getSortedBarData = ( arr ) => {
    let map = new Map();
    arr.forEach(
        ( item ) => map.set(item.claim_type, (parseFloat(map.get( item.claim_type ) || 0) + parseFloat( item.amount )
    ).toFixed(2)));

    return [...new Map(
        arr.map(( item ) => {
            const date = item.invoice_date.split(' ');
            return {
                month: date[1],
                year: date[3]
            }
        })
        .map(( item ) => [ item['month'], item ])
    ).values()]
    .sort(( first, second ) => new Date( first.year, first.month, 1 ) - new Date( second.year, second.month, 1 ))
    .map(( item, index ) => {
        return {
            ...item,
            month: months[parseInt( item.month ) - 1],
            data: Object.entries(Object.fromEntries( map ))
                    .sort(( first, second ) => parseFloat( second[1] ) - parseFloat( first[1] ))
                    .slice(0, 5)
                    .map(([ key, value ]) => key)
                    .map(( key ) => {
                        return {
                            type: key,
                            amount: arr.reduce(( acc, elem ) => elem.claim_type == key && elem.invoice_date.split(' ')[1] == item.month? acc + elem.amount : acc, 0)
                        }
                    }),
            color: type_colors.bar[index]
        }
    });
}

const zeroFill = ( num, places ) => String( num ).padEnd( places, '0' );

export{
    getDistinctClaimTypesCountLimit,
    getFirstIndexInc,
    getMax,
    getPlaces,
    getQuarterData,
    getSize,
    getSortedBarData,
    zeroFill
};