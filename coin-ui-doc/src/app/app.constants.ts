import { IColor, IItenSize, IMenu, ISize, ITypografy } from "./app.interfaces";

export const MENU: IMenu[] = [
    {
        path: "get-started",
        nome: "Get Started",
        visible: false
    },
    {
        path: "foundations",
        nome: "Foundations",
        visible: false,
        subMenu: [
            {
                path: "background",
                nome: "Background"
            },
            {
                path: "border",
                nome: "Border"
            },
            {
                path: "border-radius",
                nome: "Border Radius"
            },
            {
                path: "box-shadow",
                nome: "Box Shadow"
            },
            {
                path: "color",
                nome: "Color"
            },
            {
                path: "grid",
                nome: "Grid"
            },
            {
                path: "margin",
                nome: "Margin"
            },
            {
                path: "padding",
                nome: "Padding"
            },
            {
                path: "typography",
                nome: "Typography"
            }
        ]
    },
    {
        path: "components",
        nome: "Components",
        visible: false,
        subMenu: [
            {
                path: "button",
                nome: "Button"
            },
            {
                path: "card",
                nome: "Card"
            },
            {
                path: "dialog",
                nome: "Dialog"
            },
            {
                path: "icon",
                nome: "Icon"
            }
        ]
    }
]

export const COLORS: IColor[] = [
    {
        id: "brand",
        category: "Brand",
        itens: [
            { name: "100", hexadecimal: "#BEB5FD" },
            { name: "200", hexadecimal: "#9E8BFA" },
            { name: "300", hexadecimal: "#7F5CF6" },
            { name: "400", hexadecimal: "#6C37ED" },
            { name: "500", hexadecimal: "#5F28D9" },
            { name: "600", hexadecimal: "#4F21B6" }
        ]
    },
    {
        id: "gray",
        category: "Gray",
        itens: [
            { name: "0", hexadecimal: "#FFFFFF" },
            { name: "100", hexadecimal: "#F8F9FA" },
            { name: "200", hexadecimal: "#E9ECEF" },
            { name: "300", hexadecimal: "#CED4DA" },
            { name: "400", hexadecimal: "#ADB5BD" },
            { name: "500", hexadecimal: "#868E96" },
            { name: "600", hexadecimal: "#495057" },
            { name: "700", hexadecimal: "#343A40" },
            { name: "800", hexadecimal: "#212529" },
            { name: "900", hexadecimal: "#17191B" }
        ]
    },
    {
        id: "feedback-info",
        category: "Feedback Info",
        itens: [
            { name: "100", hexadecimal: "#CAE3F3" },
            { name: "200", hexadecimal: "#A5D2EB" },
            { name: "300", hexadecimal: "#7AB9E0" },
            { name: "400", hexadecimal: "#5B9ED6" },
            { name: "500", hexadecimal: "#4785C9" },
            { name: "600", hexadecimal: "#3D71B8" }
        ]
    },
    {
        id: "feedback-warning",
        category: "Feedback Warning",
        itens: [
            { name: "100", hexadecimal: "#FFF986" },
            { name: "200", hexadecimal: "#FFED41" },
            { name: "300", hexadecimal: "#FFDC0D" },
            { name: "400", hexadecimal: "#EEBF00" },
            { name: "500", hexadecimal: "#D19600" },
            { name: "600", hexadecimal: "#A66B02" }
        ]
    },
    {
        id: "feedback-success",
        category: "Feedback Success",
        itens: [
            { name: "100", hexadecimal: "#C9F0A6" },
            { name: "200", hexadecimal: "#A5E571" },
            { name: "300", hexadecimal: "#85D546" },
            { name: "400", hexadecimal: "#6DC82A" },
            { name: "500", hexadecimal: "#4D951B" },
            { name: "600", hexadecimal: "#3C7219" }
        ]
    },
    {
        id: "feedback-danger",
        category: "Feedback Danger",
        itens: [
            { name: "100", hexadecimal: "#FDCED6" },
            { name: "200", hexadecimal: "#FBA6B4" },
            { name: "300", hexadecimal: "#F8748D" },
            { name: "400", hexadecimal: "#EF2D57" },
            { name: "500", hexadecimal: "#DD2153" },
            { name: "600", hexadecimal: "#BB1546" }
        ]
    }
]

const sizes: IItenSize[] = [
    {
        name: "xxs",
        size: "4px",
    },
    {
        name: "xs",
        size: "8px",
    },
    {
        name: "sm",
        size: "12px",
    },
    {
        name: "lg",
        size: "16px",
    },
    {
        name: "xl",
        size: "20px",
    },
    {
        name: "xxl",
        size: "24px",
    }
]
export const SIZES: ISize[] = [
    {
        id: "",
        category: "",
        itens: sizes
    },
    {
        id: "t",
        category: "Top",
        itens: sizes
    },
    {
        id: "b",
        category: "Bottom",
        itens: sizes
    },
    {
        id: "l",
        category: "Left",
        itens: sizes
    },
    {
        id: "r",
        category: "Right",
        itens: sizes
    }
]

export const SIZES_CATEGORY: string[] = ['Complete', 'Top', 'Bottom', 'Left', 'Right']

export const SIZES_BORDER: IItenSize[] = [
    {
        name: "sm",
        size: "1px",
    },
    {
        name: "md",
        size: "2px",
    },
    {
        name: "lg",
        size: "3px",
    }
]

export const SIZES_BOX_SHADOW: IItenSize[] = [
    {
        name: "sm",
        size: "4px",
    },
    {
        name: "md",
        size: "8px",
    },
    {
        name: "lg",
        size: "12px",
    }
]

export const SIZES_BORDER_RADIUS: IItenSize[] = [
    {
        name: "xxs",
        size: "2px",
    },
    {
        name: "xs",
        size: "4px",
    },
    {
        name: "sm",
        size: "6px",
    },
    {
        name: "md",
        size: "8px",
    },
    {
        name: "lg",
        size: "10px",
    },
    {
        name: "xl",
        size: "12px",
    },
    {
        name: "xxl",
        size: "14px",
    },
    {
        name: "full",
        size: "50%",
    }
]

export const TYPOGRAPHYS: ITypografy[] = [
    {
        name: "Heading",
        category: 'heading',
        itens: [
            {
                size: 'xs',
                lineHeight: '1.2rem',
                fontSize: '18px',
                fontStyle: 'normal'
            },
            {
                size: 'sm',
                lineHeight: '1.2rem',
                fontSize: '22px',
                fontStyle: 'normal'
            },
            {
                size: 'md',
                lineHeight: '1.2rem',
                fontSize: '24px',
                fontStyle: 'normal'
            },
            {
                size: 'lg',
                lineHeight: '1.2rem',
                fontSize: '28px',
                fontStyle: 'normal'
            },
            {
                size: 'xl',
                lineHeight: '1.2rem',
                fontSize: '32px',
                fontStyle: 'normal'
            }
        ]
    },
    {
        name: "Body",
        category: 'body',
        itens: [
            {
                size: 'xxs',
                lineHeight: '1.5rem',
                fontSize: '10px',
                fontStyle: 'normal'
            },
            {
                size: 'xs',
                lineHeight: '1.5rem',
                fontSize: '12px',
                fontStyle: 'normal'
            },
            {
                size: 'sm',
                lineHeight: '1.5rem',
                fontSize: '14px',
                fontStyle: 'normal'
            },
            {
                size: 'md',
                lineHeight: '1.5rem',
                fontSize: '16px',
                fontStyle: 'normal'
            }
        ]
    }


]

export const JUSTIFY_CONTENT: { id: string, name: string }[] = [
    { id: "jcs", name: "Start" },
    { id: "jcc", name: "Center" },
    { id: "jce", name: "End" },
    { id: "jcsb", name: "Space Between" },
    { id: "jcsa", name: "Space Around" },
    { id: "jcse", name: "Space Evenly" }
]

export const ALIGN_ITEMS: { id: string, name: string }[] = [
    { id: "ais", name: "Start" },
    { id: "aic", name: "Center" },
    { id: "aie", name: "End" },
    { id: "aib", name: "Baseline" },
    { id: "ait", name: "Stretch" }
]

export const FLEX_WRAP: { id: string, name: string }[] = [
    { id: "fw", name: "Wrap" },
    { id: "fnw", name: "Nowrap" },
    { id: "fwr", name: "Wrap Reverse" }
]

export const ALIGN_CONTENT: { id: string, name: string }[] = [
    { id: "acs", name: "Start" },
    { id: "acc", name: "Center" },
    { id: "ace", name: "End" },
    { id: "acsb", name: "Space Between" },
    { id: "acsa", name: "Space Around" },
    { id: "acse", name: "Space Evenly" }
]

export const GAP: { id: string, name: string }[] = [
    { id: "xs", name: "XS [8px]" },
    { id: "sm", name: "SM [12px]" },
    { id: "md", name: "MD [16px]" },
    { id: "lg", name: "LG [20px]" },
    { id: "xl", name: "XL [24px]" },
    { id: "xxl", name: "XXL [28px]" }
]

export const FLEX_GROW: { id: string, name: string }[] = [
    { id: "fg-0", name: "0" },
    { id: "fg-1", name: "1" },
    { id: "fg-2", name: "2" },
    { id: "fg-3", name: "3" },
    { id: "fg-4", name: "4" },
    { id: "fg-5", name: "5" },
    { id: "fg-6", name: "6" },
    { id: "fg-7", name: "7" },
    { id: "fg-8", name: "8" },
    { id: "fg-9", name: "9" },
    { id: "fg-10", name: "10" }
]

export const FLEX_SHRINK: { id: string, name: string }[] = [
    { id: "fs-0", name: "0" },
    { id: "fs-1", name: "1" },
    { id: "fs-2", name: "2" },
    { id: "fs-3", name: "3" },
    { id: "fs-4", name: "4" },
    { id: "fs-5", name: "5" },
    { id: "fs-6", name: "6" },
    { id: "fs-7", name: "7" },
    { id: "fs-8", name: "8" },
    { id: "fs-9", name: "9" },
    { id: "fs-10", name: "10" }
]

export const FLEX_BASIS: { id: string, name: string }[] = [
    { id: "fb-0", name: "0 [0%]" },
    { id: "fb-5", name: "5 [5%]" },
    { id: "fb-10", name: "10 [10%]" },
    { id: "fb-15", name: "15 [15%]" },
    { id: "fb-20", name: "20 [20%]" },
    { id: "fb-25", name: "25 [25%]" },
    { id: "fb-30", name: "30 [30%]" },
    { id: "fb-35", name: "35 [35%]" },
    { id: "fb-40", name: "40 [40%]" },
    { id: "fb-45", name: "45 [45%]" },
    { id: "fb-50", name: "50 [50%]" },
    { id: "fb-55", name: "55 [55%]" },
    { id: "fb-60", name: "60 [60%]" },
    { id: "fb-65", name: "65 [65%]" },
    { id: "fb-70", name: "70 [70%]" },
    { id: "fb-75", name: "75 [75%]" },
    { id: "fb-80", name: "80 [80%]" },
    { id: "fb-85", name: "85 [85%]" },
    { id: "fb-90", name: "90 [90%]" },
    { id: "fb-95", name: "95 [95%]" },
    { id: "fb-100", name: "100 [100%]" }
]

export const ALIGN_SELF: { id: string, name: string }[] = [
    { id: "ass", name: "Start" },
    { id: "asc", name: "Center" },
    { id: "ase", name: "End" },
    { id: "asb", name: "Baseline" },
    { id: "ast", name: "Stretch" }
]
