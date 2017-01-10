import { Planets } from '../planets';
import { Constants } from '../../constants';

const Saturn: Planets = {
    position: 6, 
    name: 'Saturn', 
    distanceFromSun: 886, 
    yearLength: '29 eath years',
    description: 'Saturn',
    image: Constants.getImgSrc() + 'saturn.jpg',
    diameter_km: 116464,
    temperature_low: 'varies by layer',
    temperature_high: 'varies by layer',
    temperature_avg: '-178',
    gravity: 10.44
}