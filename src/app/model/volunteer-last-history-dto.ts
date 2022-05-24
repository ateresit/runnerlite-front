export class VolunteerLastHistoryDto {
    constructor(
        public id: number,
        public userId: number,
        public runningDate: string,
        public runningNumber: number,
        public positionName: string,
        public positionDescription:	string,
        public teamsName: string,
        public teamsId: number,
        public runningNumberСount: number,
        public positionNameHistory: string[]
    ){}
}