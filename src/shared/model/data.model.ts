export interface OrientData {
    ru: Ru;
}

export interface Ru {
    phone: string;
    menu: string;
    leave_request: string;
    main: Main;
    about: About;
    location: {
        title: string;
        subtitle: string;
        description: string;
        button: string;
        link: string;
        places: {
            title: string;
            onCar: string;
            onWalking: string;
            image: string;
        }[];
    };
    improvement: {
        title: string;
        image: string;
        description: string;
        button: string;
        info_title: string;
        infos: {
            image: string;
            description: string;
        }[];
        features: {
            image: string;
            title: string;
        }[];
        gallery: string[];
    };
}

export interface Main {
    title: string;
    subtitle: string;
}

export interface About {
    title: string;
    subtitle: string;
    description: string;
    info: AboutInfo[];
}

export interface AboutInfo {
    value: string;
    label: string;
}
