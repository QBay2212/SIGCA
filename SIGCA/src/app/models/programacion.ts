export class Programacion {
  id_programacion: number = 0;
  es_programacion?: number;
  modulo?:
    | {
        id_modulo: number;
      }
    | any;
  banco?:
    | {
        id_bancocomunal: number;
      }
    | any;
}
