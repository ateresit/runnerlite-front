export class PlanVolunteerDto {
    constructor(
        public teamsRunningCountId: number, //id строки из таблицы TeamsRunningCount (нужна для участия в забеге волонтером)
        public runningDate: string, //дата забега
        public volunteersPositionId: number, //id строки из таблицы RefVolunteersPosition (нужна для участия в забеге волонтером)
        public runningNumber: number, //номер забега
        public positionName: string, //позиция волонтера
        public positionDescription: string, //описание позиции волонтера
        public positionRequired: number, // необходимое колличество волонтеров на указанную позицию
        public id: number, //id строки в таблице волонтеров Volunteer соответствующая user занявшего позицию волонтера (нужна отмены участия в забеге)
        public fullNameVolunteer: string[], // полное имя user'a занявшего позицию волонтера
        public participationStatus: number, // статус позиции пользователя для участия в забеге (пусто если заявился или заявиться)
        public statusRunner: boolean // проверка участия текущего пользователя в качестве бегуна true - участвует, false - не участвует
    ){}
}