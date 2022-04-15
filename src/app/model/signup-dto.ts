export class SignupDto {
    constructor(
        public email: string,
        public fullName: string,
        public nikName: string,
        public city: string,
        public team: string,
        public phone: string,
        public birthday: string,
        public sex: string,
        public pass: string,
        public rePass: string
    ) {        
    }
}