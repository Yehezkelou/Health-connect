export interface users_auth {
    id : string;
    email: string | null;
    password :  string | null;
}

export interface users_standard {
    first_name: string | null;
    last_name: string | null;
    number_phone : string | null; 
}

export interface users_health {
    age : number | null;
    weight : number | null;
    height : number | null;
    has_asthma : boolean | null;
    smoker : boolean | null;
    allergies : string[] | null;
    respiratory_diseases : string[] | null;
}



export interface Users {
    auth : users_auth;
    standard : users_standard;
    medical : users_health;
}