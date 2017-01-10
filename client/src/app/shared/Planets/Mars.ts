import { Planets } from '../planets';
import { Constants } from '../../constants';

export const Mars: Planets = {
    position: 4, 
    name: 'Mars', 
    distanceFromSun: 228, 
    yearLength: '686 earth days', 
    description: 'Named after the Roman god of war, it is often referred to as the \"Red Planet\".\n Mars is the site of Olympus Mons, the largest volcano and second-highest known mountain in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System.\n',
    image: Constants.getImgSrc() + 'mars.jpg',
    diameter_km: 6794,
    temperature_low: '-125',
    temperature_high: '20',
    temperature_avg: '-55',
    gravity: 3.71
}