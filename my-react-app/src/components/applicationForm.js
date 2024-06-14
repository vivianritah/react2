import React from "react";
class ApplicationForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        alert("You have successfully applied");
    }

    render() {
        return (
            <div className="ApplicationForm">
                <h1>Application Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                        <small>Format: 123-456-7890</small>
                    </div>
                    <button type="submit">Apply</button>
                </form>
            </div>
        );
    }
}

export default ApplicationForm;