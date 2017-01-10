import { Planets } from '../planets';
import { Constants } from '../../constants';

const Venus: Planets = {
    position: 2, 
    name: 'Venus', 
    distanceFromSun: 108, 
    yearLength: '225 earth days', 
    description: 'Venus',
    image: Constants.getImgSrc() + 'venus.jpg',
    diameter_km: 12104,
    temperature_low: 'unknown',
    temperature_high: 'unknown',
    temperature_avg: '462',
    gravity: 8.87
}