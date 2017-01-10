//create planet model
//ng generate class shared/planets model

export class Planets {
    position: number;
    name: string;
    distanceFromSun: number;
    yearLength: string;
    description: string;
    image: string;
    diameter_km: number;
    temperature_low: string; 
    temperature_high: string;
    temperature_avg: string;  
    gravity: number; 
}
