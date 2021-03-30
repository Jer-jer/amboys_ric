import React from 'react';

//Custom Imports
import Chart from './chart';

const data = [
    {
        "id": "japan",
        "color": "hsl(90, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 61
            },
            {
                "x": "helicopter",
                "y": 91
            },
            {
                "x": "boat",
                "y": 98
            },
            {
                "x": "train",
                "y": 35
            },
            {
                "x": "subway",
                "y": 158
            },
            {
                "x": "bus",
                "y": 227
            },
            {
                "x": "car",
                "y": 225
            },
            {
                "x": "moto",
                "y": 107
            },
            {
                "x": "bicycle",
                "y": 54
            },
            {
                "x": "horse",
                "y": 225
            },
            {
                "x": "skateboard",
                "y": 241
            },
            {
                "x": "others",
                "y": 112
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(352, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 235
            },
            {
                "x": "helicopter",
                "y": 111
            },
            {
                "x": "boat",
                "y": 181
            },
            {
                "x": "train",
                "y": 86
            },
            {
                "x": "subway",
                "y": 27
            },
            {
                "x": "bus",
                "y": 225
            },
            {
                "x": "car",
                "y": 12
            },
            {
                "x": "moto",
                "y": 138
            },
            {
                "x": "bicycle",
                "y": 107
            },
            {
                "x": "horse",
                "y": 14
            },
            {
                "x": "skateboard",
                "y": 228
            },
            {
                "x": "others",
                "y": 28
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(110, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 239
            },
            {
                "x": "helicopter",
                "y": 246
            },
            {
                "x": "boat",
                "y": 88
            },
            {
                "x": "train",
                "y": 164
            },
            {
                "x": "subway",
                "y": 158
            },
            {
                "x": "bus",
                "y": 35
            },
            {
                "x": "car",
                "y": 147
            },
            {
                "x": "moto",
                "y": 258
            },
            {
                "x": "bicycle",
                "y": 294
            },
            {
                "x": "horse",
                "y": 28
            },
            {
                "x": "skateboard",
                "y": 98
            },
            {
                "x": "others",
                "y": 180
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(243, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 209
            },
            {
                "x": "helicopter",
                "y": 120
            },
            {
                "x": "boat",
                "y": 276
            },
            {
                "x": "train",
                "y": 129
            },
            {
                "x": "subway",
                "y": 286
            },
            {
                "x": "bus",
                "y": 105
            },
            {
                "x": "car",
                "y": 279
            },
            {
                "x": "moto",
                "y": 8
            },
            {
                "x": "bicycle",
                "y": 145
            },
            {
                "x": "horse",
                "y": 165
            },
            {
                "x": "skateboard",
                "y": 34
            },
            {
                "x": "others",
                "y": 8
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(98, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 82
            },
            {
                "x": "helicopter",
                "y": 153
            },
            {
                "x": "boat",
                "y": 230
            },
            {
                "x": "train",
                "y": 203
            },
            {
                "x": "subway",
                "y": 166
            },
            {
                "x": "bus",
                "y": 234
            },
            {
                "x": "car",
                "y": 95
            },
            {
                "x": "moto",
                "y": 79
            },
            {
                "x": "bicycle",
                "y": 296
            },
            {
                "x": "horse",
                "y": 103
            },
            {
                "x": "skateboard",
                "y": 91
            },
            {
                "x": "others",
                "y": 184
            }
        ]
    }
];

export default function Data() {
    return(
        <Chart data={data}/>
    );
}