export interface CreateGameRequest {
    name: string;
    startDate: Date;
}
export interface CreateGameMessage {
    action: string;
    data: CreateGameRequest;
}
