import fire from '../fire';

export default class DataService {
   
    
    static getData(database) {
        /* return  messages in Firebase Database */
        return fire.database().ref(database).orderByKey().limitToLast(100);
    }
    static getDataById(database, id) {
        return fire.database().ref(`${database}/${id}`).once('value');    
    }
    static pushData(database, data) {
        fire.database().ref(database).push(data);    
    }
   
}

