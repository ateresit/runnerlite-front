export class SubscriptionDto {
    constructor(
        public teamsName: string,
        public teamsId: number, 
        public nameSubscription: string,
        public descriptionSubscription:	string
    ){}
}