export class PlanRunDto {
    constructor(
        public teamsRunningCountId: number, // id строки из таблицы TeamsRunningCount (нужна для участия в забеге)
        public participationStatus: number, // статус участия в забеге 1 - участвует, 0 - не участвует
        public runningStatus: string, //статус забега
        public runningDate: string, //дата забега
        public teamsName: string, //имя команды
        public descriptionTeams: string, //описание команды
        public runningNumber: number, //номер забега
        public runnersCount: number, //количество бегунов участвующих в забеге
        public volunteersCount: number, //количество волонтеров участвующих в забеге
        public runnerCountId: number, // id строки из таблицы RunnerCount (нужна для отмены участия в забеге)
        public statusVolunteer: number, // проверка участия бегуна в качестве волонтера 0 - запрос, 1 - принято, 2 - отказано
        public volunteersId: number, //id строки в таблице волонтеров Volunteer соответствующая user занявшего позицию волонтера (нужна отмены участия в забеге)
        public volunteersPositionId: number, //id строки из таблицы RefVolunteersPosition (нужна для участия в забеге волонтером)
        public positionName: string //позиция волонтера (название)
    ){}
}