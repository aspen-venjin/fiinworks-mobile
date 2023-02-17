const getMonthFromString = ( month ) => {
    return new Date( Date.parse(month +" 1, 2012") ).getMonth() + 1;
}

const getMonthFormat = ( month ) => {
    return month.toString().length === 2? month : `0${month}`;
}

const dateFormatter = ( date ) => {
    return [
        date.toDateString()
        .split(' ')
        .pop(), 
        ...date.toDateString()
        .split(' ')
        .slice(1, -1)
    ].reverse()
        .map(
            (item) => 
            item === date
                        .toDateString()
                        .split(' ')
                        .slice(1)
                        .shift()? 
            getMonthFormat(getMonthFromString(item)) 
            : 
            item
        )
        .join('/');
}

export{
    getMonthFromString,
    getMonthFormat,
    dateFormatter
}