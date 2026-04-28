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

export const shopItems: ShopItem[] = [
    { id: 's1', title: 'Untitled Portrait No. 1', category: 'painting', price: 2400, meta: 'Oil on canvas', dimensions: '100 × 120 cm', placeholder: 'abstract portrait', available: true, image: '/assets/shop/s1.jpg' },
    { id: 's2', title: 'Landscape, After Rain', category: 'painting', price: 1800, meta: 'Oil on canvas', dimensions: '80 × 100 cm', placeholder: 'textured landscape', available: true, image: '/assets/shop/s2.jpg' },
    { id: 's3', title: 'Still Life in Darkness', category: 'painting', price: 1400, meta: 'Oil on canvas', dimensions: '60 × 80 cm', placeholder: 'dark still life', available: false, image: '/assets/shop/s3.jpg' },
    { id: 's4', title: 'Helsinki, Kallio — Print', category: 'print', price: 85, meta: 'Archival giclée print', dimensions: '40 × 50 cm', placeholder: 'street photograph', available: true, image: '/assets/shop/s4.jpg' },
    { id: 's5', title: 'Commute across the Ice — Print', category: 'print', price: 95, meta: 'Archival giclée print', dimensions: '50 × 70 cm', placeholder: 'frozen lake scene', available: true, image: '/assets/shop/s5.jpg' },
    { id: 's6', title: 'Lapland, January — Print', category: 'print', price: 75, meta: 'Archival giclée print', dimensions: '30 × 40 cm', placeholder: 'arctic landscape', available: true, image: '/assets/shop/s6.jpg' },
    { id: 's7', title: 'Portrait of a Stranger — Print', category: 'print', price: 85, meta: 'Archival giclée print', dimensions: '40 × 50 cm', placeholder: 'intimate portrait', available: true, image: '/assets/shop/s7.jpg' },
    { id: 's8', title: 'Figure Study III', category: 'painting', price: 1600, meta: 'Mixed media on canvas', dimensions: '90 × 110 cm', placeholder: 'figure study', available: true, image: '/assets/shop/s8.jpg' },
];
