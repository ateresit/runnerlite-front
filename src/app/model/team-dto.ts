import { LocationDto } from "./location-dto";

export class TeamDto {
    constructor (
        public id: number,
        public location: LocationDto,
        public name: string,
        public description: string,
        public geoLat: number,
        public geoLng: number,
        public geoDescription: string,
        public active: boolean
    ) {

    }
}