import type { MetadataRoute } from 'next';
import {paths} from '@/data/languages';
export default function sitemap(): MetadataRoute.Sitemap {return paths.flatMap(pair=>pair.map(path=>({url:'https://homemarketconsulting.com'+path})));}
