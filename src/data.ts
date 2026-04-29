/* shared artwork data + types */

export interface Artwork {
    id: string;
    title: string;
    meta: string;
    span: string;
    aspect: string;
    placeholder: string;
    image?: string;
    price?: string;
}

export interface ShopItem {
    id: string;
    title: string;
    category: 'painting' | 'print';
    price: number;
    originalPrice?: number;
    meta: string;
    dimensions: string;
    placeholder: string;
    available: boolean;
    image?: string;
}

export const paintings: Artwork[] = [
    { id: 'p1', title: 'Vesiraja', meta: 'Öljy puuvillakankaalle, 2025', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'abstract portrait', image: '/assets/paintings/p1.webp' },
    { id: 'p2', title: 'Maj Grete', meta: 'Öljy puuvillakankaalle, 2025', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'textured landscape', image: '/assets/paintings/p2.webp' },
    { id: 'p3', title: 'Villi Länsi', meta: 'Guassiväri paperille, 2024', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'dark still life', image: '/assets/paintings/p3.webp' },
    { id: 'p4', title: 'Villihevonen', meta: 'Guassiväri paperille, 2024', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'figure study', image: '/assets/paintings/p4.webp' },
];

export const photography: Artwork[] = [
    { id: 'ph1', title: 'Askel askeleelta', meta: 'Fujifilm X-T4, 2025', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'street photograph', image: '/assets/photography/ph1.webp' },
    { id: 'ph2', title: 'Viimeiset 10km', meta: 'Fujifilm X-T4, 2025', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'intimate portrait', image: '/assets/photography/ph2.webp' },
    { id: 'ph3', title: 'Voittajafiilis', meta: 'Fujifilm X-T4, 2025', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'frozen lake scene', image: '/assets/photography/ph3.webp' },

];

