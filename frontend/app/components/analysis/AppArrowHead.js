import React from 'react';

import { Line, Polygon, Svg } from 'react-native-svg';

import defaultStyles from '../../config/styles';

function AppArrowHead({
    color = defaultStyles.colors.black,
    dimension,
    strokeWidth = "2",
    x1,
    x2,
    y1,
    y2
}) {
    return (
        <Svg>
            <Polygon
                fill={ color }
                points="50,47, 46,57, 54,57"
            />
            <Polygon
                fill={ color }
                points="310,254, 310,246, 320,250"
            />
            <Line
                x1={ x1 }
                x2={ x2 }
                y1={ y2 } 
                y2={ dimension === 'x' ? y2 : y1 }
                stroke={ color }
                strokeWidth={ strokeWidth }
                markerEnd="url(#arrow)"
            />
        </Svg>
    );
}

export default AppArrowHead;