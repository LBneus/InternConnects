import React from "react";

import "./form-create-profile.styles.scss";

class CreateProfileForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                 city: '', 
                 state: '', 
                 arrivalDay: '',
                 arrivalMonth: '',
                 arrivalYear: '',
                 permanentRelocation: '', 
                 departureDay: '',
                 departureMonth: '',
                 departureYear: '',

            // Additional details
                 zipCode: '',
                 relocationPurpose: '',
                 userBio: '',
                 hometown: '',
                 university: '',
                 majors: '',
                 minors: '',
                 gradSeason: '',
                 gradYear: '',
                 upidsOfConnectionRequests: ''
        }
    }

    setCityVal = e => {
        this.setState({city: e.currentTarget.value});
    }

    setStateVal = e => {
        this.setState({state: e.currentTarget.value});
    }

    setArrivalDay = e => {
        this.setState({setArrivalDay: e.currentTarget.value});
    }

    setArrivalMonth = e => {
        this.setState({arrivalMonth: e.currentTarget.value});
    }

    setArrivalYear = e => {
        this.setState({arrivalYear: e.currentTarget.value});
    }

    setPermanentRelocation = e => {
        this.setState({permanentRelocation: e.currentTarget.value});
    }

    setDepartureDay = e => {
        this.setState({departureDay: e.currentTarget.value});
    }

    setDepartureMonth = e => {
        this.setState({departureMonth: e.currentTarget.value});
    }

    setDepartureYear = e => {
        this.setState({departureYear: e.currentTarget.value});
    }

    setZipCode = e => {
        this.setState({zipCode: e.currentTarget.value});
    }

    setRelocationPurpose = e => {
        this.setState({relocationPurpose: e.currentTarget.value});
    }

    setUserBio = e => {
        this.setState({userBio: e.currentTarget.value});
    }
    
    setHometown = e => {
        this.setState({hometown: e.currentTarget.value});
    }

    setUniversity = e => {
        this.setState({university: e.currentTarget.value});
    }

    setMajors = e => {
        this.setState({majors: e.currentTarget.value});
    }

    setMinors = e => {
        this.setState({minors: e.currentTarget.value});
    }

    setGradSeason = e => {
        this.setState({gradSeason: e.currentTarget.value});
    }

    setGradYear = e => {
        this.setState({gradYear: e.currentTarget.value});
    }

    setUpidsOfConnectionRequests = e => {
        this.setState({upidsOfConnectionRequests: e.currentTarget.value});
    }

    render(){

        return(
            <div className="create-profile-form-container">
                <div className="create-profile-form-content">

                    <div className="user-details">

                        <div className="user-details-labels">
                            <label for="date-from">From</label>
                            <br></br>
                            <label for="date-to">To</label>
                            <br></br>
                            <label for="user-city">City</label>
                            <br></br>
                            <label for="user-state">State</label>
                            <br></br>
                            <label for="user-permanentRelocation">Permanent Relocation</label>
                            <br></br>
                            <label for="user-zipCode">Zip Code</label>
                            <br></br>
                            <label for="user-relocationPurpose">Relocation Purpose</label>
                            <br></br>
                            <label for="user-hometown">Hometown</label>
                            <br></br>
                            <label for="user-university">University</label>
                            <br></br>
                            <label for="user-major">Majors</label>
                            <br></br>
                            <label for="user-minor">Minors</label>
                            <br></br>
                            <label for="user-grad-year">Graduation Year</label>
                            <br></br>
                            <label for="user-grad-season">Graduation Season</label>
                        </div>

                        <div className="user-details-info">
                            <div className="user-date-from">
                                <input name="date" type="date"></input>
                            </div>

                            <div className="user-date-to">
                                <input name="to" type="date"></input>
                            </div>

                            <div className="user-city">
                                <input name="user-city"
                                    onChange={(e) => this.setCityVal(e)}/>
                            </div>

                            <div className="user-state">
                                <input name="user-state"
                                    onChange={(e) => this.setStateVal(e)}/>
                            </div>

                            <div className="user-permanentRelocation">
                                <input name="user-permanentRelocation" type="checkbox"
                                    onChange={(e) => this.setPermanentRelocation(e)}/>
                            </div>

                            <div className="user-zipCode">
                                <input name="user-zipCode"
                                    onChange={(e) => this.setZipCode(e)}/>
                            </div>

                            <div className="user-relocationPurpose">
                                <input name="user-relocationPurpose"
                                    onChange={(e) => this.setRelocationPurpose(e)}/>
                            </div>

                            <div className="user-hometown">
                                <input name="user-hometown"
                                    onChange={(e) => this.setHometown(e)}/>
                            </div>

                            <div className="user-university">
                                <input name="university" id="university"
                                    onChange={(e) => this.setUniversity(e)}/>    
                            </div>

                            <div className="user-major">
                                <input name="user-major"
                                    onChange={(e) => this.setMajors(e)}/>
                            </div>

                            <div className="user-minor">
                                <input name="user-minor"
                                    onChange={(e) => this.setMinors(e)}/>
                            </div>

                            <div className="user-grad-year">
                                <input name="user-grad-year"
                                    onChange={(e) => this.setGradYear(e)}/>
                            </div>

                            <div className="user-grad-season">
                                <input name="user-grad-season"
                                    onChange={(e) => this.setGradSeason(e)}/>
                            </div>
                        </div>

                        </div>

                        <div className="user-about-and-priorities">

                            <div className="user-about">
                                <label>About You</label>
                                <br></br>
                                <input className="user-about-input"></input>
                            </div>

                            {/*<div className="user-priorities">
                                <label>Your Priorities</label>
                                <br></br>
                                <input className="user-about-input"></input>
                            </div>*/}

                        </div>
                    
                    </div>

                <button className="submit-create-form-button">Submit</button>
            </div>
        )
    }
}

export default CreateProfileForm;