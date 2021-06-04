import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.props = props;
    }

    render() {
        return (
            <li className="btn">
                <span>
                    { this.props.icon }
                </span>

                <span>
                    { this.props.text }
                </span>
            </li>
        )
    }
}

export default MenuItem