/* ------------ Location interfaces Example ------------
export interface ILocation {
    id: Number;
    address: IAddress;
}

export interface IAddress {
    addressType: String,
    street: String,
    administrativeArea: String,
    locality: String,
    subAdministrativeArea: String,
    reference: String
}

export interface IDBLocation {
    LOCATIONID: Number,
    ADDRESSTYPE: String,
    STREET: String,
    ADMINISTRATIVEAREA: String,
    LOCALITY: String,
    SUBADMINISTRATIVEAREA: String,
    REFERENCE: String
}
*/