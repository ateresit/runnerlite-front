export class AchievementsDto {

    
    constructor(
        public runningNumber: number,
        public runningDate: string,
        public teamsName: string,
        public teamsId: number,
        public achievementName: string,
        public achievementId: number,
        public finishPlace: number,
        public result: number,
    ){} 

    

    
}