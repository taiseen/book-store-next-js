import {
    CubeTransparentIcon,
    RectangleStackIcon,
    ShoppingCartIcon,
    Squares2X2Icon,
    UserGroupIcon,
    BookOpenIcon,
    TruckIcon,
    HomeIcon,
    CogIcon,
} from "@heroicons/react/24/solid";

export const urlPaths = {
    root: '/',
    store: '/store',
    sellLend: "/store/sell-lend",
    cart: "/store/cart",
    trackOrder: "/store/track-order",
    community: "/store/community",
    settings: "/store/settings",
    about: "/store/about",
    admin: "/store/admin",
}

const routes = [
    { name: "Home", href: urlPaths.root, icon: HomeIcon },
    { name: "Books", href: urlPaths.store, icon: BookOpenIcon },
    { name: "Sell or Lend", href: urlPaths.sellLend, icon: RectangleStackIcon },
    { name: "Cart", href: urlPaths.cart, icon: ShoppingCartIcon },
    { name: "Track Order", href: urlPaths.trackOrder, icon: TruckIcon },
    { name: "Community", href: urlPaths.community, icon: UserGroupIcon },
    { name: "Settings", href: urlPaths.settings, icon: CogIcon },
    { name: "About", href: urlPaths.about, icon: Squares2X2Icon },
    { name: "Admin", href: urlPaths.admin, icon: CubeTransparentIcon },
];

export default routes;