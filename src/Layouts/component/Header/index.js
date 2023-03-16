import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import config from '~/Config';
import image from '~/assets/Image';
import Image from '../../../components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { UploadIcon, SearchIcon, MenuIcon, MicroIcon, NotificationIcon } from '~/components/Icon/icon';
import HistorySearch from '~/components/HistorySearch';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-logo')}>
                <button className={cx('menu')}>
                    <MenuIcon />
                </button>
                <Link to={config.routes.home} className={cx('logo')}>
                    <Image src={image.logo} alt="YouTube" className={cx('logo-icon')} />
                </Link>
            </div>

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

            <div className={cx('action')}>
                <Button rightIcon={<UploadIcon />}>Upload</Button>

                <Tippy content="Tạo">
                    <button className={cx('upload-icon')}>
                        <UploadIcon />
                    </button>
                </Tippy>
                <Tippy content="Thông Báo">
                    <button className={cx('noti-icon')}>
                        <NotificationIcon />
                    </button>
                </Tippy>
                <Image
                    src="https://yt3.ggpht.com/AvJlzqwWUBaTzp8JHXFM9jQfDI-SbY79hDdz8WDxrxWWpCVMtDApLgqRC1GLsyyHOSt1XG6u=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="avatar"
                    className={cx('avatar')}
                />
            </div>
        </div>
    );
}

export default Header;
