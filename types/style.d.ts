import { Section } from "@/app/page";

interface Menu {
    section: Section;
    content: string;
}

interface IconProps {
    className?: string;
    onClick?: (() => any) | undefined
}