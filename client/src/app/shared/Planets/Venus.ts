import { Planets } from '../planets';
import { Constants } from '../../constants';

export const Venus: Planets = {
    position: 2, 
    name: 'Venus', 
    distanceFromSun: 108, 
    yearLength: '225 earth days', 
    description: 'It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide.\n The atmospheric pressure at the planet\'s surface is 92 times that of Earth, or roughly the pressure found 900 m (3,000 ft) underwater on Earth.\n Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light.',
    image: Constants.getImgSrc() + 'venus.jpg',
    diameter_km: 12104,
    temperature_low: 'unknown',
    temperature_high: 'unknown',
    temperature_avg: '462',
    gravity: 8.87
}