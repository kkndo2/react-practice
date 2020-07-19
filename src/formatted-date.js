import React from 'react';

export default class FormattedDate extends React.Component{
    render(props) {
        return (
            <div>formatted {this.props.date.getFullYear()}</div>
        );
    }
}