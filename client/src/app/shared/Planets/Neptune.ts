import { Planets } from '../planets';
import { Constants } from '../../constants';

const Neptune: Planets = {
    position: 8, 
    name: 'Neptune', 
    distanceFromSun: 2800, 
    yearLength: '165 earth years',
    description: 'Neptune',
    image: Constants.getImgSrc() + 'neptune.jpg',
    diameter_km: 49244,
    temperature_low: '-218',
    temperature_high: '-151',
    temperature_avg: '-200',
    gravity: 11.15
}