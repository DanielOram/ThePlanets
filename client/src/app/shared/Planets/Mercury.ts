import { Planets } from '../planets';
import { Constants } from '../../constants';

export const Mercury: Planets = {
    position: 1, 
    name: 'Mercury', 
    distanceFromSun: 58, 
    yearLength: '88 earth days', 
    description: 'Mercury is named after the Roman deity Mercury, the messenger to the gods.\n Mercury\'s surface appears heavily cratered and is similar in appearance to the Moon, indicating that it has been geologically inactive for billions of years. Having almost no atmosphere to retain heat, surface temperatures varies diurnally more than any other planet in the Solar System.\n Two spacecraft have visited Mercury: Mariner 10 flew by in 1974 and 1975; and MESSENGER, launched in 2004, orbited Mercury over 4,000 times in four years, before exhausting its fuel and crashing into the planet\'s surface on April 30, 2015.', 
    image: Constants.getImgSrc() + 'mercury.jpg',
    diameter_km: 4879,
    temperature_low: '-173',
    temperature_high:'427',
    temperature_avg: '167',
    gravity: 3.7 
}