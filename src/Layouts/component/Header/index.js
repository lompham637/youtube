import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import config from '~/Config';
import image from '~/assets/Image';
import Image from '../../../components/Image';
import {
    UploadIcon,
    MenuIcon,
    NotificationIcon,
    AccountIcon,
    StudioIcon,
    ChangeAccountIcon,
    LogoutIcon,
    CoinIcon,
    DataPersonIcon,
    DisplayIcon,
    LanguageIcon,
    LimitResIcon,
    LocationIcon,
    KeyboardIcon,
    SettingIcon,
    SupportIcon,
    RequestIcon,
} from '~/components/Icon/icon';
import Search from '~/components/Search';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <AccountIcon />,
        title: 'Kênh của bạn',
    },
    {
        icon: <StudioIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <ChangeAccountIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <LogoutIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <CoinIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <DataPersonIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <DisplayIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <LanguageIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <LimitResIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <LocationIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <SettingIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <SupportIcon />,
        title: 'Youtube Studio',
    },
    {
        icon: <RequestIcon />,
        title: 'Youtube Studio',
    },
];

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

            <Search />

            <div className={cx('action')}>
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
                <Menu items={MENU_ITEMS}>
                    <Image
                        src="https://yt3.ggpht.com/AvJlzqwWUBaTzp8JHXFM9jQfDI-SbY79hDdz8WDxrxWWpCVMtDApLgqRC1GLsyyHOSt1XG6u=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt="avatar"
                        className={cx('avatar')}
                    />
                </Menu>
            </div>
        </div>
    );
}

export default Header;
