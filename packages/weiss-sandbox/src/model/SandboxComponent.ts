export interface SandboxComponentItem {
    componentName: string;
    componentDesc: string;
    componentURL: string;
    props: {[name: string]: {description?: string, props: SandboxComponentProperty[]}} | SandboxComponentProperty[];
    code: SandboxComponentCode[];
}

export interface SandboxComponentProperty{
    name: string;
    type?: string;
    default?: string;
    description: string;
}

export interface SandboxComponentCode{
    accordionHeader: string;
    code: string;
    language: string;
}