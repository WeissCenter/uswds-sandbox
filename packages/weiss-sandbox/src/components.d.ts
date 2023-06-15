/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { HeaderNavItem } from "./model/HeaderNavMenu";
export { HeaderNavItem } from "./model/HeaderNavMenu";
export namespace Components {
    interface CodeSnippet {
        "code": string;
        "lang": string;
        "readonly": boolean;
    }
    interface DesignTokenManagement {
    }
    interface SandboxMainContent {
    }
    interface UswdsAccordion {
        "accordionType": 'borderless' | 'bordered' | 'multiselectable' | 'multiselectable-bordered';
    }
    interface UswdsAccordionItem {
        "expanded": boolean;
        "header": string;
    }
    interface UswdsBreadcrumb {
    }
    interface UswdsButton {
    }
    interface UswdsButtonGroup {
    }
    interface UswdsExtendedHeader {
    }
    interface UswdsHeader {
        "enableSearch": boolean;
        "headerTitle": string;
        "navItems": HeaderNavItem[];
    }
    interface UswdsModal {
    }
    interface UswdsSideNav {
        "region": string;
    }
    interface UswdsSideNavItem {
    }
    interface UswdsSideNavSubList {
    }
    interface UswdsTable {
        "caption": string;
        "tableType": 'borderless' | 'bordered';
    }
}
export interface CodeSnippetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCodeSnippetElement;
}
declare global {
    interface HTMLCodeSnippetElement extends Components.CodeSnippet, HTMLStencilElement {
    }
    var HTMLCodeSnippetElement: {
        prototype: HTMLCodeSnippetElement;
        new (): HTMLCodeSnippetElement;
    };
    interface HTMLDesignTokenManagementElement extends Components.DesignTokenManagement, HTMLStencilElement {
    }
    var HTMLDesignTokenManagementElement: {
        prototype: HTMLDesignTokenManagementElement;
        new (): HTMLDesignTokenManagementElement;
    };
    interface HTMLSandboxMainContentElement extends Components.SandboxMainContent, HTMLStencilElement {
    }
    var HTMLSandboxMainContentElement: {
        prototype: HTMLSandboxMainContentElement;
        new (): HTMLSandboxMainContentElement;
    };
    interface HTMLUswdsAccordionElement extends Components.UswdsAccordion, HTMLStencilElement {
    }
    var HTMLUswdsAccordionElement: {
        prototype: HTMLUswdsAccordionElement;
        new (): HTMLUswdsAccordionElement;
    };
    interface HTMLUswdsAccordionItemElement extends Components.UswdsAccordionItem, HTMLStencilElement {
    }
    var HTMLUswdsAccordionItemElement: {
        prototype: HTMLUswdsAccordionItemElement;
        new (): HTMLUswdsAccordionItemElement;
    };
    interface HTMLUswdsBreadcrumbElement extends Components.UswdsBreadcrumb, HTMLStencilElement {
    }
    var HTMLUswdsBreadcrumbElement: {
        prototype: HTMLUswdsBreadcrumbElement;
        new (): HTMLUswdsBreadcrumbElement;
    };
    interface HTMLUswdsButtonElement extends Components.UswdsButton, HTMLStencilElement {
    }
    var HTMLUswdsButtonElement: {
        prototype: HTMLUswdsButtonElement;
        new (): HTMLUswdsButtonElement;
    };
    interface HTMLUswdsButtonGroupElement extends Components.UswdsButtonGroup, HTMLStencilElement {
    }
    var HTMLUswdsButtonGroupElement: {
        prototype: HTMLUswdsButtonGroupElement;
        new (): HTMLUswdsButtonGroupElement;
    };
    interface HTMLUswdsExtendedHeaderElement extends Components.UswdsExtendedHeader, HTMLStencilElement {
    }
    var HTMLUswdsExtendedHeaderElement: {
        prototype: HTMLUswdsExtendedHeaderElement;
        new (): HTMLUswdsExtendedHeaderElement;
    };
    interface HTMLUswdsHeaderElement extends Components.UswdsHeader, HTMLStencilElement {
    }
    var HTMLUswdsHeaderElement: {
        prototype: HTMLUswdsHeaderElement;
        new (): HTMLUswdsHeaderElement;
    };
    interface HTMLUswdsModalElement extends Components.UswdsModal, HTMLStencilElement {
    }
    var HTMLUswdsModalElement: {
        prototype: HTMLUswdsModalElement;
        new (): HTMLUswdsModalElement;
    };
    interface HTMLUswdsSideNavElement extends Components.UswdsSideNav, HTMLStencilElement {
    }
    var HTMLUswdsSideNavElement: {
        prototype: HTMLUswdsSideNavElement;
        new (): HTMLUswdsSideNavElement;
    };
    interface HTMLUswdsSideNavItemElement extends Components.UswdsSideNavItem, HTMLStencilElement {
    }
    var HTMLUswdsSideNavItemElement: {
        prototype: HTMLUswdsSideNavItemElement;
        new (): HTMLUswdsSideNavItemElement;
    };
    interface HTMLUswdsSideNavSubListElement extends Components.UswdsSideNavSubList, HTMLStencilElement {
    }
    var HTMLUswdsSideNavSubListElement: {
        prototype: HTMLUswdsSideNavSubListElement;
        new (): HTMLUswdsSideNavSubListElement;
    };
    interface HTMLUswdsTableElement extends Components.UswdsTable, HTMLStencilElement {
    }
    var HTMLUswdsTableElement: {
        prototype: HTMLUswdsTableElement;
        new (): HTMLUswdsTableElement;
    };
    interface HTMLElementTagNameMap {
        "code-snippet": HTMLCodeSnippetElement;
        "design-token-management": HTMLDesignTokenManagementElement;
        "sandbox-main-content": HTMLSandboxMainContentElement;
        "uswds-accordion": HTMLUswdsAccordionElement;
        "uswds-accordion-item": HTMLUswdsAccordionItemElement;
        "uswds-breadcrumb": HTMLUswdsBreadcrumbElement;
        "uswds-button": HTMLUswdsButtonElement;
        "uswds-button-group": HTMLUswdsButtonGroupElement;
        "uswds-extended-header": HTMLUswdsExtendedHeaderElement;
        "uswds-header": HTMLUswdsHeaderElement;
        "uswds-modal": HTMLUswdsModalElement;
        "uswds-side-nav": HTMLUswdsSideNavElement;
        "uswds-side-nav-item": HTMLUswdsSideNavItemElement;
        "uswds-side-nav-sub-list": HTMLUswdsSideNavSubListElement;
        "uswds-table": HTMLUswdsTableElement;
    }
}
declare namespace LocalJSX {
    interface CodeSnippet {
        "code"?: string;
        "lang"?: string;
        "onOnEditorChange"?: (event: CodeSnippetCustomEvent<any>) => void;
        "readonly"?: boolean;
    }
    interface DesignTokenManagement {
    }
    interface SandboxMainContent {
    }
    interface UswdsAccordion {
        "accordionType"?: 'borderless' | 'bordered' | 'multiselectable' | 'multiselectable-bordered';
    }
    interface UswdsAccordionItem {
        "expanded"?: boolean;
        "header"?: string;
    }
    interface UswdsBreadcrumb {
    }
    interface UswdsButton {
    }
    interface UswdsButtonGroup {
    }
    interface UswdsExtendedHeader {
    }
    interface UswdsHeader {
        "enableSearch"?: boolean;
        "headerTitle"?: string;
        "navItems"?: HeaderNavItem[];
    }
    interface UswdsModal {
    }
    interface UswdsSideNav {
        "region"?: string;
    }
    interface UswdsSideNavItem {
    }
    interface UswdsSideNavSubList {
    }
    interface UswdsTable {
        "caption"?: string;
        "tableType"?: 'borderless' | 'bordered';
    }
    interface IntrinsicElements {
        "code-snippet": CodeSnippet;
        "design-token-management": DesignTokenManagement;
        "sandbox-main-content": SandboxMainContent;
        "uswds-accordion": UswdsAccordion;
        "uswds-accordion-item": UswdsAccordionItem;
        "uswds-breadcrumb": UswdsBreadcrumb;
        "uswds-button": UswdsButton;
        "uswds-button-group": UswdsButtonGroup;
        "uswds-extended-header": UswdsExtendedHeader;
        "uswds-header": UswdsHeader;
        "uswds-modal": UswdsModal;
        "uswds-side-nav": UswdsSideNav;
        "uswds-side-nav-item": UswdsSideNavItem;
        "uswds-side-nav-sub-list": UswdsSideNavSubList;
        "uswds-table": UswdsTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "code-snippet": LocalJSX.CodeSnippet & JSXBase.HTMLAttributes<HTMLCodeSnippetElement>;
            "design-token-management": LocalJSX.DesignTokenManagement & JSXBase.HTMLAttributes<HTMLDesignTokenManagementElement>;
            "sandbox-main-content": LocalJSX.SandboxMainContent & JSXBase.HTMLAttributes<HTMLSandboxMainContentElement>;
            "uswds-accordion": LocalJSX.UswdsAccordion & JSXBase.HTMLAttributes<HTMLUswdsAccordionElement>;
            "uswds-accordion-item": LocalJSX.UswdsAccordionItem & JSXBase.HTMLAttributes<HTMLUswdsAccordionItemElement>;
            "uswds-breadcrumb": LocalJSX.UswdsBreadcrumb & JSXBase.HTMLAttributes<HTMLUswdsBreadcrumbElement>;
            "uswds-button": LocalJSX.UswdsButton & JSXBase.HTMLAttributes<HTMLUswdsButtonElement>;
            "uswds-button-group": LocalJSX.UswdsButtonGroup & JSXBase.HTMLAttributes<HTMLUswdsButtonGroupElement>;
            "uswds-extended-header": LocalJSX.UswdsExtendedHeader & JSXBase.HTMLAttributes<HTMLUswdsExtendedHeaderElement>;
            "uswds-header": LocalJSX.UswdsHeader & JSXBase.HTMLAttributes<HTMLUswdsHeaderElement>;
            "uswds-modal": LocalJSX.UswdsModal & JSXBase.HTMLAttributes<HTMLUswdsModalElement>;
            "uswds-side-nav": LocalJSX.UswdsSideNav & JSXBase.HTMLAttributes<HTMLUswdsSideNavElement>;
            "uswds-side-nav-item": LocalJSX.UswdsSideNavItem & JSXBase.HTMLAttributes<HTMLUswdsSideNavItemElement>;
            "uswds-side-nav-sub-list": LocalJSX.UswdsSideNavSubList & JSXBase.HTMLAttributes<HTMLUswdsSideNavSubListElement>;
            "uswds-table": LocalJSX.UswdsTable & JSXBase.HTMLAttributes<HTMLUswdsTableElement>;
        }
    }
}
