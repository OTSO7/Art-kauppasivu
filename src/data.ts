/* shared artwork data + types */

export interface Artwork {
    id: string;
    title: string;
    meta: string;
    span: string;
    aspect: string;
    placeholder: string;
    image?: string;
    images?: string[]; // Multiple views for carousel
    price?: string;
    hasPrints?: boolean; // New toggle for prints note
    dimensions?: string; // New field for size
    status?: 'available' | 'sold'; // New status field
    edition?: string; // New field for photography
    type?: 'painting' | 'photography'; // To distinguish UI labels
    pricing?: { size: string; price: string }[]; // Structured for dropdown
    objectPosition?: string; // CSS object-position (e.g., 'center 20%')
}

/**
 * Smart Art Helper
 * Automatically generates paths based on folder structure:
 * /assets/artworks/[slug]/main.webp
 * /assets/artworks/[slug]/1.webp, 2.webp...
 */
function createArt(slug: string, data: Partial<Artwork> & { imagesCount?: number }): Artwork {
    const { imagesCount = 0, ...rest } = data;

    const image = `/assets/artworks/${slug}/main.webp`;
    const images = imagesCount > 0
        ? [image, ...Array.from({ length: imagesCount }, (_, i) => `/assets/artworks/${slug}/${i + 1}.webp`)]
        : [image];

    return {
        id: slug,
        title: data.title || 'Untitled',
        meta: data.meta || '',
        span: data.span || 'span-4',
        aspect: data.aspect || 'aspect-3-4',
        placeholder: data.placeholder || 'artwork',
        image,
        images,
        type: data.type || 'painting',
        ...rest
    };
}

export const paintings: Artwork[] = [
    createArt('vesiraja', {
        title: 'Vesiraja',
        type: 'painting',
        meta: 'Oil on canvas, 2025',
        price: '450 €',
        dimensions: '50 x 61 cm',
        imagesCount: 2,
        hasPrints: false,
        status: 'available'
    }),
    createArt('maj-grete', {
        title: 'Maj Grete',
        type: 'painting',
        meta: 'Oil on canvas, 2025',
        price: '700 €',
        dimensions: '40 x 30 cm',
        imagesCount: 2,
        hasPrints: false,
        status: 'sold'
    }),
];

const standardPricing = [
    { size: '30 x 40 cm', price: '45 €' },
    { size: '50 x 70 cm', price: '75 €' },
];

export const photography: Artwork[] = [
    createArt('askel-askeleelta', {
        id: 'ph1',
        type: 'photography',
        title: 'Askel askeleelta',
        meta: 'Archival pigment print, 2025',
        pricing: standardPricing,
        image: '/assets/photography/ph1.webp'
    }),
    createArt('nopeus', {
        id: 'ph2',
        type: 'photography',
        title: 'Nopeus',
        meta: 'Archival pigment print, 2025',
        objectPosition: 'left center',
        pricing: standardPricing,
        image: '/assets/photography/ph2.webp'
    }),
    createArt('voittajafiilis', {
        id: 'ph3',
        type: 'photography',
        title: 'Voittajafiilis',
        meta: 'Archival pigment print, 2025',
        pricing: standardPricing,
        image: '/assets/photography/ph3.webp'
    }),
    createArt('koira', {
        id: 'ph4',
        type: 'photography',
        title: 'Koira ja poiju',
        meta: 'Archival pigment print, 2025',
        objectPosition: '60% 50%',
        pricing: standardPricing,
        image: '/assets/photography/ph4.webp'
    }),
    createArt('laituri', {
        id: 'ph5',
        type: 'photography',
        title: 'Laituri',
        meta: 'Archival pigment print, 2025',
        pricing: standardPricing,
        image: '/assets/photography/ph5.webp'
    }),
    createArt('aamun-rutiini', {
        id: 'ph6',
        type: 'photography',
        title: 'Aamun rutiini',
        meta: 'Archival pigment print, 2025',
        objectPosition: '30% 40%',
        pricing: standardPricing,
        image: '/assets/photography/ph6.webp'
    }),
    createArt('kuoren-alla', {
        id: 'ph7',
        type: 'photography',
        title: 'Kuoren alla',
        meta: 'Archival pigment print, 2025',
        pricing: standardPricing,
        image: '/assets/photography/ph7.webp'
    }),
];
