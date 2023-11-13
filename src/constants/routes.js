import {
    CubeTransparentIcon,
    RectangleStackIcon,
    Squares2X2Icon,
    UserGroupIcon,
    BookOpenIcon,
    TruckIcon,
    HomeIcon,
    CogIcon,
} from "@heroicons/react/24/solid";

const routes = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Books", href: "/store", icon: BookOpenIcon },
    { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
    { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
    { name: "Community", href: "/store/community", icon: UserGroupIcon },
    { name: "Settings", href: "/store/settings", icon: CogIcon },
    { name: "About", href: "/store/about", icon: Squares2X2Icon },
    { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

export default routes;