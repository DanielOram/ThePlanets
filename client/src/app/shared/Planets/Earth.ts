import { Planets } from '../planets';
import { Constants } from '../../constants';

export const Earth: Planets = {
    position: 3, 
    name: 'Earth', 
    distanceFromSun: 150, 
    yearLength: '365 earth days', 
    description: 'Earth formed about 4.54 billion years ago.\n About 71% of Earth\'s surface is covered with water, mostly by its oceans. The remaining 29% is land consisting of continents and islands.\n The modern English word Earth developed from a wide variety of Middle English forms,[n 8] which derived from an Old English noun most often spelled eorðe.',
    image: Constants.getImgSrc() + 'earth.jpg',
    diameter_km: 12742,
    temperature_low: '-88',
    temperature_high: '58',
    temperature_avg: '16',
    gravity: 9.807 
}