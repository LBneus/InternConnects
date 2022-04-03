import react from "react";

import "./form-create-profile.styles.scss";

const CreateProfileForm = () => (
    <div className="create-profile-form-container">
        <div className="create-profile-form-content">

            <div className="user-details">

                <div className="user-details-labels">
                    <label for="date-from">Dates</label>
                    <br></br>
                    <label for="date-to">To</label>
                    <br></br>
                    <label for="university">University </label>
                    <br></br>
                    <label for="study-major">Major of Study</label>
                    <br></br>
                    <label for="user-grad-year">Graduation Year</label>
                    <br></br>
                    <label for="internship-location">Internship Location</label>
                    <br></br>
                    <label for="user-hometown">Hometown</label>
                    <br></br>
                    <label for="user-car">Have a Car</label>
                </div>

                <div className="user-details-info">
                    <div className="user-date-from">
                        <input name="date" type="date"></input>
                    </div>

                    <div className="user-date-to">
                        <input name="to" type="date"></input>
                    </div>

                    <div className="user-university">
                        <select name="university" id="university">
                            <option value="Vanderbilt University">Vanderbilt University</option>
                            <option value="MIT">MIT</option>
                            <option value="University of Richmond">University of Richmond</option>
                            <option value="UCLA">UCLA</option>
                        </select>
                    </div>

                    <div className="user-major">
                        <input name="study-major"></input>
                    </div>

                    <div className="user-grad-year">
                        <input name="user-grad-year"></input>
                    </div>

                    <div className="user-internship-location">
                        <input name="internship-location"></input>
                    </div>

                    <div className="user-hometown">
                        <input name="user-hometown"></input>
                    </div>

                    <div className="user-car">
                        <input name="user-car"></input>
                    </div>
                </div>

                </div>

                <div className="user-about-and-priorities">

                    <div className="user-about">
                        <label>About You</label>
                        <br></br>
                        <input className="user-about-input"></input>
                    </div>

                    <div className="user-priorities">
                        <label>Your Priorities</label>
                        <br></br>
                        <input className="user-about-input"></input>
                    </div>

                </div>
            
            </div>

        <button className="submit-create-form-button">Submit</button>
    </div>
)

export default CreateProfileForm;