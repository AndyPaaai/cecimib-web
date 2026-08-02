import fabriccioImg from '../assets/fabriccio-blog.jpeg';
import johanaImg from '../assets/johana-blog.jpeg';
import andyImg from '../assets/Andy-grado.jpeg';
import columna1Img from '../assets/columna1.png';
import columna2Img from '../assets/columna2.png';
import columna3Img from '../assets/columna3.png';

// Single source of truth for news articles (images and order).
// The text content (title, excerpt, date, etc) is driven by the translation files (es.json / en.json) 
// using the 'id' as the key.
export const newsData = [
    {
        id: '1-6-2026',
        image: columna3Img,
    },
    {
        id: '1-5-2026',
        image: columna2Img,
    },
    {
        id: '1-4-2026',
        image: columna1Img,
    },
    {
        id: '1-3-2026',
        image: andyImg,
    },
    {
        id: '1-1-2026',
        image: fabriccioImg,
    },
    {
        id: '1-2-2026',
        image: johanaImg,
    }
];
