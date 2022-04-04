import React from "react";

import "./quick-info.styles.scss";

const QuickInfo = ({QuickInfoProps}) => (
    <div className="quick-facts-container">
        <div className="quick-facts-category-name">Quick Facts</div>

        <div className="quick-facts-dates"> Dates: 
            <span className="matched-user-date">
                {QuickInfoProps.arrivalMonth} {QuickInfoProps.arrivalDay}, {QuickInfoProps.arrivalYear}&nbsp;to&nbsp;
                {QuickInfoProps.departureMonth} {QuickInfoProps.departureDay}, {QuickInfoProps.departureYear} 
            </span>
        </div>

        <div className="quick-facts-university"> University: 
            <span className="matched-user-university">
                {QuickInfoProps.university} Class of {QuickInfoProps.gradYear}
            </span>
        </div>

        <div className="quick-facts-majors"> Major(s): 
            <span className="matched-user-major">
                {QuickInfoProps.majors}
            </span>
        </div>

        <div className="quick-facts-hometown"> Hometown: 
            <span className="matched-user-hometown">
              {QuickInfoProps.hometown}
            </span>
        </div>
        
    </div>
)

export default QuickInfo;