import { RefDistrictDto } from "./refdistrict-dto";

export class LocationDto {
    constructor(
        public id: number,
        public refDistricts: RefDistrictDto,
        public address: string,
        public alternateLocationsId: number,
        public useAltlocations: boolean
    ) {

    }
}