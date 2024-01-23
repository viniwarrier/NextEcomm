export abstract class ServiceBase {
  static API_URL='https://api.chec.io/v1';
  static PUBLIC_KEY = 'pk_53819472d59995d585c740357684afae3e5aaf2118a52';

 static getURL(path:string){
    return `${this.API_URL}${path}`;

 }
}