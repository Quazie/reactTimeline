import React from 'react';
import { Week } from './components/Week';

import styles from '../..//timeline.module.css';

interface IYear {
    year: number;
    startWeek: number;
    endWeek: number;
}

export class Year extends React.Component<IYear> {
    renderMonths() {
        const { startWeek, endWeek } = this.props;
        let monthElements: JSX.Element[] = [];

        for (let i = startWeek; i < endWeek; i++) {
            let message = '';
            if (i == startWeek && startWeek !== 0) {
                message = 'I was born';
            }

            if (i == endWeek - 1 && endWeek !== 52) {
                message = 'Expected life expectancy';
            }

            monthElements.push(<Week message={message} key={i} />);
        }

        return monthElements;
    }

    render() {
        const { year } = this.props;
        return (
            <>
                <div className={`${styles.year} ${styles.timelineElement}`}>{year} </div>
                {this.renderMonths()}
            </>
        );
    }
}
