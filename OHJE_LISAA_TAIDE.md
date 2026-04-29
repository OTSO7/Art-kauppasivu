# OHJE: Näin lisäät uutta taidetta

Tämä järjestelmä on tehty **erittäin helpoksi**. Sinun ei tarvitse koodata polkuja, vain seurata kansiorakennetta.

## 1. Valmistele kuvat
Pakkaa kuvat (Squoosh.app -> WebP) ja nimeä ne näin:
- `main.webp` (Pääkuva, joka näkyy galleriassa)
- `1.webp`, `2.webp` jne. (Lisäkuvat karuselliin)

## 2. Lisää kansio
Luo uusi kansio osoitteeseen:
`public/assets/artworks/TEOKSEN-NIMI/`
*(Esimerkki: `public/assets/artworks/maalaus-x/`)*

## 3. Päivitä koodi (`data.ts`)
Lisää uusi rivi `paintings` -listaan:

```tsx
createArt('teoksen-nimi', {
    title: 'Teoksen Otsikko',
    meta: 'Öljy kankaalle, 2025',
    price: '1 200 €',
    dimensions: '60 x 80 cm',
    status: 'available', // 'available' (näyttää Inquire-napin) tai 'sold' (piilottaa napin)
    hasPrints: true,
    imagesCount: 2
})
```

---
**Vinkki**: Jos teoksella on vain yksi kuva, jätä `imagesCount` pois tai laita `0`.

## 4. Valokuvien lisääminen
Valokuvissa koodi on hieman erilainen ammattimaisen galleria-tyylin vuoksi:

```tsx
createArt('kuvan-nimi', {
    type: 'photography',
    title: 'Teoksen Otsikko',
    meta: 'Archival pigment print, 2025',
    edition: 'Limited edition of 15',
    pricing: [
        { size: '30 x 40 cm', price: '45 €' },
        { size: '50 x 70 cm', price: '80 €' },
        { size: '70 x 100 cm', price: '130 €' }
    ]
})
```
