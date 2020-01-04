import React from 'react';
import { Year } from './components/Year';
import { DateTime } from 'luxon';
import { DecadeHeader } from './components/DecadeHeader';

interface ITimeline {
    birthDay: DateTime;
    gender?: 'm' | 'f';
}

export class Timeline extends React.Component<ITimeline> {
    private getLifeExpectancy() {
        const { gender } = this.props;
        // TODO: Make this more accurate per birthyear - currently using
        // 1987 from https://www.infoplease.com/life-expectancy-birth-race-and-sex-1930-2010
        switch (gender) {
            case 'm':
                return 71.4;
            case 'f':
                return 78.3;
            default:
                return 74.9;
        }
    }

    private renderYears() {
        const { birthDay } = this.props;
        let birthYear = birthDay.year;
        let currentAge = 0;

        let weeksToRender = Math.ceil(this.getLifeExpectancy() * 52);

        const yearElements: JSX.Element[] = [];

        yearElements.push(<DecadeHeader type="0" />);
        yearElements.push(<Year year={birthYear} startWeek={birthDay.weekNumber} endWeek={52} />);
        weeksToRender -= 52 - birthDay.weekNumber;
        while (weeksToRender > 0) {
            currentAge += 1;
            yearElements.push(
                <Year year={birthYear + currentAge} startWeek={0} endWeek={Math.min(52, weeksToRender)} />,
            );
            weeksToRender -= 52;
            if ((currentAge + 1) % 10 == 0) {
                yearElements.push(<DecadeHeader type={`${currentAge + 1}`} />);
            }
        }

        return yearElements;
    }

    render() {
        return <div>{this.renderYears()}</div>;
    }
}
