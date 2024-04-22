



namespace UsersUtils {
    export class Parent {
        name:string = "arun";

        
        setName(name:string){
            this.name = name
        }
    }

    export interface userType {
        getName():string;
    }
}

