import { Formation } from "./formation"

export class Session {

    constructor(
        private _id:number,
        private _date_debut: string,
        private _date_fin: string,
        private _prix: string,
        private _lieu: string,
        private _formation: Formation
    ) { }

    get id() { return this._id }
    get dateDebut() { return this._date_debut }
    get dateFin() { return this._date_fin }
    get prix() { return this._prix }
    get lieu() { return this._lieu }
    get formation() { return this._formation }

    set id(id: number) { this._id = id }
    set dateDebut(dateDebut: string) { this._date_debut = dateDebut }
    set dateFin(dateFin: string) { this._date_fin = dateFin }
    set prix(prix: string) { this._prix = prix }
    set lieu(lieu: string) { this._lieu = lieu }
    set formation(formation: Formation) { this._formation = formation }

}