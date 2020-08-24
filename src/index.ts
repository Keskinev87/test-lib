export enum Roles {
  beableadmin = 'beableadmin',
  districtadmin = 'districtadmin',
  contentloader = 'contentloader',
  itadmin = 'itadmin'
}

export class CreateGameMessage {
  action: string;
  name: string;
}

