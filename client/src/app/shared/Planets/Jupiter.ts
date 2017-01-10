import { Planets } from '../planets';
import { Constants } from '../../constants';

 export const Jupiter: Planets = {
    position: 5, 
    name: 'Jupiter', 
    distanceFromSun: 778, 
    yearLength: '12 earth years',
    description: 'Jupiter is named after the roman God of the same name.\n Jupiter has at least 67 moons, including the four large Galilean moons discovered by Galileo Galilei in 1610. Ganymede, the largest of these, has a diameter greater than that of the planet Mercury.\n',
    image: Constants.getImgSrc() + 'jupiter.jpg',
    diameter_km: 142796,
    temperature_low: 'cannot be accurately measured',
    temperature_high: 'cannot be accurately measured',
    temperature_avg: '-145',
    gravity: 24.79
}