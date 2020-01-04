import React from 'react';
import { Month } from './components/Month';

interface IYear {
    year: number;
    startMonth: number;
}

export class Year extends React.Component<IYear> {
    renderMonths() {
        const { startMonth } = this.props;
        let monthElements: JSX.Element[] = [];

        for (let i = startMonth; i < 12; i++) {
            monthElements.push(<Month message="| |" key={i} />);
        }

        return monthElements;
    }

    render() {
        const { year } = this.props;
        return (
            <div>
                {year} {this.renderMonths()}
            </div>
        );
    }
}
