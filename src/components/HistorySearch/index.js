import classNames from 'classnames/bind';
import { HistoryIcon } from '../Icon/icon';
import styles from './HIstorySearch.module.scss';

const cx = classNames.bind(styles);

function HistorySearch() {
    return (
        <div className={cx('wrapper')}>
            <HistoryIcon className={cx('icon')} />
            <span className={cx('content-search')}> After You - Gryffin </span>
            <button className={cx('delete-btn')}>Xoa</button>
        </div>
    );
}

export default HistorySearch;
