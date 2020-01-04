import React from 'react';
import { Week } from './components/Week';

import styles from '../..//timeline.module.css';

interface IYear {
    year: number;
    startMonth: number;
}

export class Year extends React.Component<IYear> {
    renderMonths() {
        const { startMonth } = this.props;
        let monthElements: JSX.Element[] = [];

        for (let i = startMonth; i < 52; i++) {
            monthElements.push(<Week message="" key={i} />);
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
