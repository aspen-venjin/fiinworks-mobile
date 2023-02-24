const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const dateFormatter = ( date ) => {
    const auxdate = date.split(' ');
    return `${ auxdate[2] } ${months[parseFloat( auxdate[1] ) - 1]} ${ auxdate[3] }`;
}

const getCardData = ( arr, isApproval = false ) => {
    return [
        {
            title: arr.filter(( item ) => (isApproval?  item.claim_type != 'Travel Requisition' && item.status == 'pending' : item.status == 'pending')).length,
            subtitle: `Pending ${"\n"}Claims`,
            icon: "clipboard-clock-outline",
            containerColor: 'secondary_yellow',
            titleSize: 26,
            subtitleSize: 13
        },
        ( isApproval?
            {
                title: arr.filter(( item ) => item.claim_type == 'Travel Requisition' && item.status == 'pending').length,
                subtitle: `Pending ${"\n"}Travel ${"\n"}Requisitions`,
                icon: "clipboard-off-outline",
                containerColor: 'primary_teal',
                titleSize: 26,
                subtitleSize: 13
            }
            :
            {
                title: arr.filter(( item ) => item.status == 'rejected').length,
                subtitle: `Rejected ${"\n"}Claims`,
                icon: "clipboard-off-outline",
                containerColor: 'secondary_red',
                titleSize: 26,
                subtitleSize: 13
            }
        )
    ]
}

const getListData = ( arr, isApproval = false ) => {
    return arr.filter(( item ) => isApproval? item.status == 'pending' : item.status != 'approved')
        .map(( item ) => {
            return {
                amount: item.amount,
                color: isApproval? (item.claim_type == 'Travel Requisition'? 'primary_teal' : 'secondary_yellow') : (item.status == 'pending'? 'secondary_yellow' : 'secondary_red'),
                description: item.project_code,
                image: item.image,
                name: item.name,
                department: item.department,
                user_profile: item.user_profile,
                status: item.status.charAt(0).toUpperCase() + item.status.slice(1),
                subTitle: dateFormatter( item.invoice_date ),
                title: item.claim_type
            }
        });
}

export{
    getCardData,
    getListData
}