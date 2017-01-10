import { Planets } from '../planets';
import { Constants } from '../../constants';

const Mars: Planets = {
    position: 4, 
    name: 'Mars', 
    distanceFromSun: 228, 
    yearLength: '686 earth days', 
    description: 'Mars',
    image: Constants.getImgSrc() + 'mars.jpg',
    diameter_km: 6794,
    temperature_low: '-125',
    temperature_high: '20',
    temperature_avg: '-55',
    gravity: 3.71
}