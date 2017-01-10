import { Planets } from '../planets';
import { Constants } from '../../constants';

const Mercury: Planets = {
    position: 1, 
    name: 'Mercury', 
    distanceFromSun: 58, 
    yearLength: '88 earth days', 
    description: 'Mercury', 
    image: Constants.getImgSrc() + 'mercury.jpg',
    diameter_km: 4879,
    temperature_low: '-173',
    temperature_high:'427',
    temperature_avg: '167',
    gravity: 3.7 
}