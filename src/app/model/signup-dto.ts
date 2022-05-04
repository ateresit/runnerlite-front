export class SignupDto {
    constructor(
        public id: number,
        public email: string,
        public fullName: string,
        public password: string,
        public nickName: string,
        public phone: string,
        public isActive: boolean,
        public useNick: boolean,
        public teamId: number,
        public birthday: number,
        public sex: string
    ) {        
    }
}