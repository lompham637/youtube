//Path
import config from '~/Config';

//Page
import Home from '~/pages/Home';
import Library from '~/pages/Library';
import Subscribe from '~/pages/Subscriber';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.library, component: Library },
    { path: config.routes.subscriber, component: Subscribe },
    { path: config.routes.upload, component: Upload },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
