/* shared artwork data + types */

export interface Artwork {
    id: string;
    title: string;
    meta: string;
    span: string;
    aspect: string;
    placeholder: string;
    image?: string;
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
    { id: 'p1', title: 'Vesiraja', meta: 'Öljy puuvillakankaalle, 2025', span: 'span-7', aspect: 'aspect-3-4', placeholder: 'abstract portrait', image: '/assets/paintings/p1.jpg' },
    { id: 'p2', title: 'Maj Grete', meta: 'Öljy puuvillakankaalle, 2025', span: 'span-5', aspect: 'aspect-2-3', placeholder: 'textured landscape', image: '/assets/paintings/p2.jpg' },
    { id: 'p3', title: 'still life in darkness', meta: 'oil on canvas, 2023', span: 'span-4', aspect: 'aspect-1-1', placeholder: 'dark still life', image: '/assets/paintings/p3.jpg' },
    { id: 'p4', title: 'figure study iii', meta: 'mixed media on canvas, 2024', span: 'span-4', aspect: 'aspect-3-2', placeholder: 'figure study', image: '/assets/paintings/p4.jpg' },
    { id: 'p5', title: 'interior, morning light', meta: 'oil on linen, 2024', span: 'span-4', aspect: 'aspect-4-3', placeholder: 'interior painting', image: '/assets/paintings/p5.jpg' },
];

export const photography: Artwork[] = [
    { id: 'ph1', title: 'helsinki, kallio', meta: 'shot on 35mm film', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'street photograph', image: '/assets/photography/ph1.jpg' },
    { id: 'ph2', title: 'portrait of a stranger', meta: 'shot on 35mm film', span: 'span-4', aspect: 'aspect-5-7', placeholder: 'intimate portrait', image: '/assets/photography/ph2.jpg' },
    { id: 'ph3', title: 'commute across the ice', meta: '35mm · kodak portra 400', span: 'span-4', aspect: 'aspect-3-4', placeholder: 'frozen lake scene', image: '/assets/photography/ph3.jpg' },
    { id: 'ph4', title: 'late shift', meta: 'shot on 35mm film', span: 'span-6', aspect: 'aspect-16-9', placeholder: 'night street scene', image: '/assets/photography/ph4.jpg' },
    { id: 'ph5', title: 'lapland, january', meta: '35mm · kodak gold 200', span: 'span-3', aspect: 'aspect-1-1', placeholder: 'arctic landscape', image: '/assets/photography/ph5.jpg' },
    { id: 'ph6', title: 'self portrait, window', meta: 'shot on 35mm film', span: 'span-3', aspect: 'aspect-3-4', placeholder: 'self portrait', image: '/assets/photography/ph6.jpg' },
];

export const shopItems: ShopItem[] = [
    { id: 's1', title: 'untitled portrait no. 1', category: 'painting', price: 2400, meta: 'oil on canvas', dimensions: '100 × 120 cm', placeholder: 'abstract portrait', available: true, image: '/assets/shop/s1.jpg' },
    { id: 's2', title: 'landscape, after rain', category: 'painting', price: 1800, meta: 'oil on canvas', dimensions: '80 × 100 cm', placeholder: 'textured landscape', available: true, image: '/assets/shop/s2.jpg' },
    { id: 's3', title: 'still life in darkness', category: 'painting', price: 1400, meta: 'oil on canvas', dimensions: '60 × 80 cm', placeholder: 'dark still life', available: false, image: '/assets/shop/s3.jpg' },
    { id: 's4', title: 'helsinki, kallio — print', category: 'print', price: 85, meta: 'archival giclée print', dimensions: '40 × 50 cm', placeholder: 'street photograph', available: true, image: '/assets/shop/s4.jpg' },
    { id: 's5', title: 'commute across the ice — print', category: 'print', price: 95, meta: 'archival giclée print', dimensions: '50 × 70 cm', placeholder: 'frozen lake scene', available: true, image: '/assets/shop/s5.jpg' },
    { id: 's6', title: 'lapland, january — print', category: 'print', price: 75, meta: 'archival giclée print', dimensions: '30 × 40 cm', placeholder: 'arctic landscape', available: true, image: '/assets/shop/s6.jpg' },
    { id: 's7', title: 'portrait of a stranger — print', category: 'print', price: 85, meta: 'archival giclée print', dimensions: '40 × 50 cm', placeholder: 'intimate portrait', available: true, image: '/assets/shop/s7.jpg' },
    { id: 's8', title: 'figure study iii', category: 'painting', price: 1600, meta: 'mixed media on canvas', dimensions: '90 × 110 cm', placeholder: 'figure study', available: true, image: '/assets/shop/s8.jpg' },
];
