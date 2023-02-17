export const getSelectedName = ( arr, name ) => {
    return JSON.parse(
                JSON.stringify( arr ))
                    .filter( item => item.name == name )[0]
}