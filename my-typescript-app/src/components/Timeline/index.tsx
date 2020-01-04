import React from 'react';
import { Year } from './components/Year';

interface ITimeline {
    birthDay: Date;
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
        const weeksToRender = Math.ceil(this.getLifeExpectancy() * 52);
    }

    render() {
        const { birthDay } = this.props;
        const birthYear = birthDay.getFullYear();
        return (
            <div>
                <Year year={birthYear} startMonth={3} />
                <Year year={Math.floor(birthYear + this.getLifeExpectancy())} startMonth={0} />
            </div>
        );
    }
}
