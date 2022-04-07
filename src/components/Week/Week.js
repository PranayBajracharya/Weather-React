import classes from './Week.module.css';
import Card from '../UI/Card.js';
import Day from './Day/Day.js';

// const date = new Date();

const weekData = [
    { 
        date: 'Thu, Apr 07',
        temperature: `11 / 6°C`,
        details: 'partly sunny',
    },
    { 
        date: 'Fri, Apr 08',
        temperature: `11 / 6°C`,
        details: 'stormy',
    },
    { 
        date: 'Sat, Apr 09',
        temperature: `11 / 6°C`,
        details: 'cloudy',
    },
    { 
        date: 'Sun, Apr 10',
        temperature: `11 / 6°C`,
        details: 'sunny',
    },
    { 
        date: 'Mon, Apr 11',
        temperature: `11 / 6°C`,
        details: 'rain',
    },
    { 
        date: 'Tue, Apr 12',
        temperature: `11 / 6°C`,
        details: 'moderate rain',
    },
    { 
        date: 'Wed, Apr 13',
        temperature: `11 / 6°C`,
        details: 'moderate rain',
    },

];

const Week = () => {
    const datas = weekData.map((data) => (
        <Day key={data.date} data={data}></Day>
    ));

    return (
        <Card className={classes.week}>
            <h2>7-day forecast</h2>
            <ul>
                {datas}
            </ul>
        </Card>
    );
};

export default Week;