import { Planets } from '../planets';
import { Constants } from '../../constants';

 export const Jupiter: Planets = {
    position: 5, 
    name: 'Jupiter', 
    distanceFromSun: 778, 
    yearLength: '12 earth years',
    description: 'Jupiter',
    image: Constants.getImgSrc() + 'jupiter.jpg',
    diameter_km: 142796,
    temperature_low: 'cannot be accurately measured',
    temperature_high: 'cannot be accurately measured',
    temperature_avg: '-145',
    gravity: 24.79
}