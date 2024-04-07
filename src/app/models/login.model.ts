export interface Login {
    personCode: number;
    userId: string;
    password: string;
    userName: string;
    deleteDate: Date | null;
    insertDate: Date;
    insertPersonCode: number;
    updateDate: Date;
    updatePersonCode: number;
}
