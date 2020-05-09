import React from 'react';
import Star from '../../assets/emptyStar.png';
import FilledStar from '../../assets/star.png';

class StarClass extends React.Component {

    state = {
        starCountFlag: false,
        filledStarArray: [{ type: 1}, { type: 1}, { type: 1}, { type: 1}, { type: 1}],
    };

    changeStarHandler = index => {
        let starArray = [];
        for (let i = 0; i <=index; i++) {
            starArray.push(Star);
        }
        this.setState({ starCountFlag: true, filledStarArray: starArray });
        this.setState({ filledStarArray: starArray });
    }

    render() {
        const { starCountFlag, filledStarArray } = this.state;
        let bodyContent = (<div>
            {[1, 2, 3, 4, 5].map((x, index) => <img onClick={() => this.changeStarHandler(index)} style={{ width: '25px', height: '25px', marginRight: '3px' }} key={index} src={Star} alt="unloaded" />)}
        </div>);
        if (starCountFlag) {
            bodyContent = (<div>
                {filledStarArray.map((x, index) => <img onClick={() => this.changeStarHandler(index)} style={{ width: '25px', height: '25px', marginRight: '3px' }} key={index} src={FilledStar} alt="unloaded" />)}
            </div>);
        }
        return bodyContent;
    }
}
export default StarClass;