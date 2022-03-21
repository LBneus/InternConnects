import React from "react";

import "./quick-info.styles.scss";

const QuickInfo = () => (
    <div className="quick-facts-container">
        <div className="quick-facts-category-name">Quick Facts</div>

        <div className="quick-facts-dates"> Dates: 
            <span className="matched-user-date">
                June 21, 2022 to September 2, 2022
            </span>
        </div>

        <div className="quick-facts-university"> University: 
            <span className="matched-user-university">
                Vanderbilt University Class of 2025
            </span>
        </div>

        <div className="quick-facts-majors"> Major(s): 
            <span className="matched-user-major">
                Computer Science
            </span>
        </div>

        <div className="quick-facts-hometown"> Hometown: 
            <span className="matched-user-hometown">
                St Louis, Mo 
            </span>
        </div>
        
    </div>
)

export default QuickInfo;