import React from "react";

import "./form-create-profile.styles.scss";

import {UUIDContext} from "../../../../UUIDContext";

class CreateProfileForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            city: '',
            state: '',
            arrivalDay: '',
            arrivalMonth: '',
            arrivalYear: '',
            permanentRelocation: false,
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

            userPhotoPath: '',
            requestSuccess: false,
            requestInProgress: false
        }
        this.sendCreateProfileRequest = this.sendCreateProfileRequest.bind(this);
        this.NumberToMonth = this.NumberToMonth.bind(this);
        this.uploadToS3 = this.uploadToS3.bind(this);
    }

    NumberToMonth = (number) => {
        const monthsVector = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthsVector[number];
    }

    sendCreateProfileRequest() {

        let dMonth = this.NumberToMonth(parseInt(this.state.departureMonth));
        let aMonth = this.NumberToMonth(parseInt(this.state.arrivalMonth));

        let rDay = (this.state.permanentRelocation ? '01' : this.state.departureDay);
        let rMonth = (this.state.permanentRelocation ? 'January' : dMonth);
        let rYear = (this.state.permanentRelocation ? '3000' : this.state.departureYear);

        this.setState({requestInProgress: true})

        fetch(" https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/profiles", {
            "method": "POST",
            "body": JSON.stringify({
                IC_UUID: this.context.userUUID,
                newProfile:
                    {
                        city: this.state.city,
                        state: this.state.state,
                        permanentRelocation: this.state.permanentRelocation,
                        zipCode: this.state.zipCode,
                        relocationPurpose: this.state.relocationPurpose,
                        userBio: this.state.userBio,
                        hometown: this.state.hometown,
                        university: this.state.university,
                        majors: this.state.majors,
                        minors: this.state.minors,
                        gradSeason: this.state.gradSeason,
                        gradYear: this.state.gradYear,

                        arrivalDay: this.state.arrivalDay,
                        arrivalMonth: aMonth,
                        arrivalYear: this.state.arrivalYear,
                        departureDay: rDay,
                        departureMonth: rMonth,
                        departureYear: rYear,
                        photoPath: this.state.userPhotoPath
                    }
            })
        })
            .then(response => {this.setState({requestSuccess: true, requestInProgress: false})})
    }

    setCityVal = e => {
        this.setState({city: e.currentTarget.value});
    }

    setStateVal = e => {
        this.setState({state: e.currentTarget.value});
    }

    setArrival = e => {
        this.setState({
            arrivalYear: e.currentTarget.value.toString().substring(0, 4),
            arrivalMonth: e.currentTarget.value.toString().substring(5, 7),
            arrivalDay: e.currentTarget.value.toString().substring(8, 10)
        })
    }

    setDeparture = e => {
        this.setState({
            departureYear: e.currentTarget.value.toString().substring(0, 4),
            departureMonth: e.currentTarget.value.toString().substring(5, 7),
            departureDay: e.currentTarget.value.toString().substring(8, 10)
        })
    }

    setPermanentRelocation = e => {
        this.setState({permanentRelocation: !this.state.permanentRelocation});
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

    uploadToS3 = e => {
        const image = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({userPhotoPath: reader.result})
        }
        reader.readAsDataURL(image);
    }

    render() {
        if (this.state.requestSuccess) {
            return (
                <div align='center'>
                    <h1>Thank you for creating an InternConnects profile.</h1>
                    <h2>You may now close this window.</h2>
                </div>
            )
        } else if (this.state.requestInProgress) {
            return (
                <div align='center'>
                    <h1>Please wait, your request is being processed.</h1>
                    <h2>Do not close this window.</h2>
                </div>
            )
        } else {
            return (
                <div className="create-profile-form-container">
                    <div className="create-profile-form-content">

                        <div className="user-details">

                            <div className="user-details-labels">
                                <label htmlFor="date-from">From</label>
                                <br/>
                                <label htmlFor="date-to">To</label>
                                <br/>
                                <label htmlFor="user-city">City</label>
                                <br/>
                                <label htmlFor="user-state">State</label>
                                <br/>
                                <label htmlFor="user-permanentRelocation">Permanent Relocation</label>
                                <br/>
                                <label htmlFor="user-zipCode">Zip Code</label>
                                <br/>
                                <label htmlFor="user-relocationPurpose">Relocation Purpose</label>
                                <br/>
                                <label htmlFor="user-hometown">Hometown</label>
                                <br/>
                                <label htmlFor="user-university">University</label>
                                <br/>
                                <label htmlFor="user-major">Majors</label>
                                <br/>
                                <label htmlFor="user-minor">Minors</label>
                                <br/>
                                <label htmlFor="user-grad-year">Graduation Year</label>
                                <br/>
                                <label htmlFor="user-grad-season">Graduation Season</label>
                                <br/>
                                <label htmlFor="user-profile-picture">Profile Picture</label>
                            </div>

                            <div className="user-details-info">
                                <div className="user-date-from">
                                    <input name="date" type="date"
                                           onChange={(e) => this.setArrival(e)}/>
                                </div>

                                <div className="user-date-to">
                                    <input name="to" type="date"
                                           onChange={(e) => this.setDeparture(e)}/>
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

                                <div>
                                    <input type="file" id="myFile" name="user-profile-picture"
                                           accept="image/png, image/jpeg"
                                           onChange={(e) => this.uploadToS3(e)}/>
                                </div>

                            </div>

                        </div>

                        <div className="user-about-and-priorities">

                            <div className="user-about">
                                <label>About You</label>
                                <br/>
                                <input className="user-about-input"
                                       onChange={(e) => this.setUserBio(e)}/>
                            </div>

                            {/*<div className="user-priorities">
                                <label>Your Priorities</label>
                                <br></br>
                                <input className="user-about-input"></input>
                            </div>*/}

                        </div>
                    </div>
                    <button className="submit-create-form-button" onClick={this.sendCreateProfileRequest}>Submit
                    </button>
                </div>
            )
        }
    }
}

CreateProfileForm.contextType = UUIDContext;

export default CreateProfileForm;