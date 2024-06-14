import React from 'react';

class Essay extends React.Component {
    render() {
        return (
            <div className="essay">
                <h1> About {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default Essay;