import { Planets } from '../planets';
import { Constants } from '../../constants';

const Earth: Planets = {
    position: 3, 
    name: 'Earth', 
    distanceFromSun: 150, 
    yearLength: '365 earth days', 
    description: '365 earth days to orbit the sun',
    image: Constants.getImgSrc() + 'earth.jpg',
    diameter_km: 12742,
    temperature_low: '-88',
    temperature_high: '58',
    temperature_avg: '16',
    gravity: 9.807 
}