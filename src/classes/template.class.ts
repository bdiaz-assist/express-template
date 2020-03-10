/* ---------------------------- Location Class Example ----------------------------
import { ILocation, IAddress, IDBLocation } from '../interfaces/location.interface'

export default class Location implements ILocation{

    public id: Number;
    public address: IAddress;

    constructor(dbLocation: IDBLocation){        
        this.id = dbLocation.LOCATIONID;
        this.address = {
            addressType: dbLocation.ADDRESSTYPE,
            street: dbLocation.STREET,
            administrativeArea: dbLocation.ADMINISTRATIVEAREA,
            locality: dbLocation.LOCALITY,
            subAdministrativeArea: dbLocation.SUBADMINISTRATIVEAREA,
            reference: dbLocation.REFERENCE
        } as IAddress;
    }
}
*/