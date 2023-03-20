import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon, MicroIcon } from '~/components/Icon/icon';
import HistorySearch from '~/components/HistorySearch';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div>
            <HeadlessTippy
                interactive
                visible
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <HistorySearch />
                            <HistorySearch />
                            <HistorySearch />
                            <HistorySearch />
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx('search')}>
                    <div className={cx('search-input')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />
                    </div>
                    <Tippy content="Tìm kiếm">
                        <button className={cx('btn-search')}>
                            <SearchIcon className={cx('search-icon')} />
                        </button>
                    </Tippy>
                    <Tippy content="Tìm kiếm bằng giọng nói " placement="bottom">
                        <button className={cx('micro')}>
                            <MicroIcon />
                        </button>
                    </Tippy>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
