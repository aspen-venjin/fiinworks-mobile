const sampleClaims = [
    {
        claim_id: '1',
        claim_type: 'Lodging',
        amount: 29.50,
        status: 'pending',
        invoice_date: 'Tue 01 03 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Tue 01 03 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '2',
        claim_type: 'Meal Subsidy',
        amount: 96.50,
        status: 'pending',
        invoice_date: 'Mon 01 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Mon 01 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '3',
        claim_type: 'Mileage',
        amount: 19.20,
        status: 'pending',
        invoice_date: 'Sun 01 01 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 01 01 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '4',
        claim_type: 'Parking',
        amount: 83.50,
        status: 'pending',
        invoice_date: 'Wed 01 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Wed 01 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '5',
        claim_type: 'Petrol',
        amount: 58.90,
        status: 'pending',
        invoice_date: 'Thu 01 05 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 01 05 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '6',
        claim_type: 'Public Transport Fares',
        amount: 2.50,
        status: 'pending',
        invoice_date: 'Fri 01 06 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Fri 01 06 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '7',
        claim_type: 'Travel Requisition',
        amount: 422.60,
        status: 'pending',
        invoice_date: 'Wed 01 01 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Wed 01 01 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '8',
        claim_type: 'Welfare',
        amount: 57.60,
        status: 'pending',
        invoice_date: 'Thu 01 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 01 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '9',
        claim_type: 'Medical',
        amount: 274.10,
        status: 'pending',
        invoice_date: 'Fri 01 03 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Fri 01 03 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '10',
        claim_type: 'Swab',
        amount: 56.90,
        status: 'pending',
        invoice_date: 'Thu 01 01 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 01 01 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '11',
        claim_type: 'Entertainment',
        amount: 185.70,
        status: 'pending',
        invoice_date: 'Fri 01 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Fri 01 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '12',
        claim_type: 'Miscellaneous',
        amount: 628.10,
        status: 'pending',
        invoice_date: 'Sat 01 03 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sat 01 03 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '13',
        claim_type: 'Lodging',
        amount: 85.50,
        status: 'pending',
        invoice_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '14',
        claim_type: 'Meal Subsidy',
        amount: 17.50,
        status: 'pending',
        invoice_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '15',
        claim_type: 'Mileage',
        amount: 12.20,
        status: 'pending',
        invoice_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '16',
        claim_type: 'Parking',
        amount: 65.50,
        status: 'pending',
        invoice_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '17',
        claim_type: 'Petrol',
        amount: 200.90,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '18',
        claim_type: 'Public Transport Fares',
        amount: 58.90,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '19',
        claim_type: 'Travel Requisition',
        amount: 835.40,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '20',
        claim_type: 'Welfare',
        amount: 59.90,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '21',
        claim_type: 'Medical',
        amount: 683.60,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '22',
        claim_type: 'Swab',
        amount: 102.10,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '23',
        claim_type: 'Entertainment',
        amount: 294.40,
        status: 'pending',
        invoice_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 12 02 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '24',
        claim_type: 'Miscellaneous',
        amount: 394.60,
        status: 'pending',
        invoice_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '25',
        claim_type: 'Toll',
        amount: 394.60,
        status: 'pending',
        invoice_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 12 04 2022 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '26',
        claim_type: 'Lodging',
        amount: 146.50,
        status: 'pending',
        invoice_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '27',
        claim_type: 'Meal Subsidy',
        amount: 85.50,
        status: 'pending',
        invoice_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '28',
        claim_type: 'Mileage',
        amount: 54.20,
        status: 'pending',
        invoice_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '29',
        claim_type: 'Parking',
        amount: 86.50,
        status: 'pending',
        invoice_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '30',
        claim_type: 'Petrol',
        amount: 250.90,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '31',
        claim_type: 'Public Transport Fares',
        amount: 97.90,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '32',
        claim_type: 'Travel Requisition',
        amount: 143.40,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '33',
        claim_type: 'Welfare',
        amount: 68.90,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '34',
        claim_type: 'Medical',
        amount: 64.60,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '35',
        claim_type: 'Swab',
        amount: 102.10,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '36',
        claim_type: 'Entertainment',
        amount: 294.40,
        status: 'pending',
        invoice_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Thu 02 02 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '37',
        claim_type: 'Miscellaneous',
        amount: 344.60,
        status: 'pending',
        invoice_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '38',
        claim_type: 'Toll',
        amount: 94.60,
        status: 'pending',
        invoice_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 02 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    },
    {
        claim_id: '39',
        claim_type: 'Toll',
        amount: 244.60,
        status: 'pending',
        invoice_date: 'Sun 01 04 2023 08:00:00 GMT+0800 (Malaysia Time)',
        submission_date: 'Sun 01 04 2023 08:00:00 GMT+0800 (Malaysia Time)'
    }
];

export{
    sampleClaims
}