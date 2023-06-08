export interface HeaderNavItem{
    current: boolean;
    menuTitle?: string;
    type: HeaderNavItemType;
    items?: HeaderSubMenuItem[];
    item?: HeaderNavLink;
}

export interface HeaderSubMenuItem{
    label: string;
    href: string;
}

export interface HeaderNavLink{
    label: string;
    href: string;
}


export enum HeaderNavItemType{
    SUB_MENU,
    NAV_LINK
}