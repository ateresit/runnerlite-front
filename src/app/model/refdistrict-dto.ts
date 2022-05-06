import { RefCityDto } from "./refcity-dto";

export class RefDistrictDto {
    constructor(
        public id: number,
        public name: string,
        public refCity: RefCityDto
    ){

    }

}