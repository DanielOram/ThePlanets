import { Planets } from '../planets';
import { Constants } from '../../constants';

export const Uranus: Planets = {
    position: 7, 
    name: 'Uranus', 
    distanceFromSun: 1800, 
    yearLength: '84 earth years',
    description: 'Uranus',
    image: Constants.getImgSrc() + 'uranus.jpg',
    diameter_km: 50724,
    temperature_low: 'varies by layer',
    temperature_high: 'varies by layer',
    temperature_avg: '-213',
    gravity: 8.69
}