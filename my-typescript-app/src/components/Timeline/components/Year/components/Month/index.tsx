import React from 'react';

interface IMonth {
    message?: string;
}

export class Month extends React.Component<IMonth> {
    render() {
        const { message } = this.props;
        return <div>{message}</div>;
    }
}
