export interface IBaseDomain {
    '__editorItemTitle': string;
    url: string;
    ico: string;
}

export interface ICategories extends IBaseDomain {
    subcategories: IBaseDomain[]
}

export interface IDepartment extends IBaseDomain {
    categories?: ICategories[];
}

export interface IAditionalInfo {
    '__editorItemTitle': string;
    url: string;
}

export interface ILinksPrincipal {
    '__editorItemTitle': string;
    url: string;
}

export interface ICategoryMenu {
    imageDrawer: string;
    colorFondoHover: string;
    colorTextHover: string;
    departments: IDepartment[];
    linksPrincipal: ILinksPrincipal[];
    additionalInfo: IAditionalInfo[];
    linksExtras: IBaseDomain[];
    scroll:boolean;
}

export interface ICategoryMenuItem {
    department: IDepartment;
}
