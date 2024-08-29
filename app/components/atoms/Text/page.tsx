import { PropsWithChildren } from "react";

interface TypographyProps extends PropsWithChildren {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'paragraph'
}

interface TextProps extends PropsWithChildren {
    className?: string;
}

export default function Text(props: TypographyProps) {
    const { variant, children, className } = props;
    const baseClassNames = 'antialiased tracking-normal';
    const typographies = {
        h1: (p: TextProps) => <h1 className={`${baseClassNames} text-5xl leading-tight ${p.className}`}>{p.children}</h1>,
        h2: (p: TextProps) => <h2 className={`${baseClassNames} text-4xl leading-[1.3]  ${p.className}`}>{p.children}</h2>,
        h3: (p: TextProps) => <h3 className={`${baseClassNames} text-3xl leading-snug ${p.className}`}>{p.children}</h3>,
        h4: (p: TextProps) => <h4 className={`${baseClassNames} text-2xl leading-snug ${p.className}`}>{p.children}</h4>,
        h5: (p: TextProps) => <h5 className={`${baseClassNames} text-xl leading-snug ${p.className}`}>{p.children}</h5>,
        h6: (p: TextProps) => <h6 className={`${baseClassNames} text-lg leading-relaxed ${p.className}`}>{p.children}</h6>,
        lead: (p: TextProps) => <p className={`${baseClassNames} text-base font-normal leading-relaxed ${p.className}`}>{p.children}</p>,
        paragraph: (p: TextProps) => <p className={`${baseClassNames} text-sm font-normal leading-relaxed ${p.className}`}>{p.children}</p>,
    }
    return typographies[variant]({
        className,
        children
    });
}