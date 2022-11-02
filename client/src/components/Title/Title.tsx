import './Title.scss'
import house from '../../icons/house.svg';
import arrow from '../../icons/arrowRight.svg';

interface Props {
    count: number;
}

export const Title: React.FC<Props> = ({ count }) => (
    <div className='title'>
        <div className='title_navigation'>
            <img
                src={house}
                alt="home"
                className='title_house' />
            <img
                src={arrow}
                alt="arrow"
                className='title_arrow' />
            <p className='title_arrowText'>Phones</p>
        </div>
        <h1 className="title_lable">Mobile phones</h1>
        <p className='title_count'>{`${count} models`}</p>
    </div>
);