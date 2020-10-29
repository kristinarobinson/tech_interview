// Tech Interview
// for the data 'customers' below, print a list of the top 15 customers by the amount ordered last month
// Bonus #1:  print the list for the last 7 days
// Bonus #2:  print the list based on highest volume per SKU in the last 30 days
// Bonus #3:  if you had more time, what additional features would you add?

let customers = [{
        'timestamp': '2020-09-15 12:35:00Z',
        'user': {
            'first_name': 'john',
            'last_name': 'doe',
            'id': '12uwx',
            'last_login': '2020-09-15 12:34:00Z'
        },
        'items': [{
                'sku': 'iwuefsd124',
                'qty': 12,
                'unit_price': 32.24
            },
            {
                'sku': 'abcdefg100',
                'qty': 200,
                'unit_price': 2.00
            }
        ],
    },
    {
        'timestamp': '2020-09-14 12:35:00Z',
        'user': {
            'first_name': 'jane',
            'last_name': 'doe',
            'id': '12uwz',
            'last_login': '2020-09-16 02:34:00Z'
        },
        'items': [{
            'sku': 'iwuefsd124',
            'qty': 50,
            'unit_price': 32.24
        }],
    },
    {
        'timestamp': '2020-09-15 12:35:00Z',
        'user': {
            'first_name': 'john',
            'last_name': 'doe',
            'id': '12uwx',
            'last_login': '2020-09-17 07:17:00Z'
        },
        'items': [{
                'sku': 'zyxwuvt567',
                'qty': 25,
                'unit_price': 15.99
            },
            {
                'sku': 'abcdefg100',
                'qty': 200,
                'unit_price': 2.00
            }
        ],
    },
    {
        'timestamp': '2020-09-20 17:45:00Z',
        'user': {
            'first_name': 'john',
            'last_name': 'jeffry',
            'id': '12utx',
            'last_login': '2020-09-20 03:20:00Z'
        },
        'items': [{
            'sku': 'iwuefsd124',
            'qty': 5,
            'unit_price': 32.24
        }],
    },
];