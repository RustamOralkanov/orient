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
            time: string;
            time_title: string;
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
    architecture: {
        title: string;
        description: string;
        image: string;
        description_2: string;
        description_3: string;
        infos: {
            title: string;
            image: string;
        }[];
    };
    hall: {
        title: string;
        subtitle: string;
        description: string;
        description_2: string;
        image: string;
        image_2: string;
        gallery: string[];
        infos: {
            title: string;
            image: string;
        }[];
    };
    parking: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        image_2: string;
        infos: {
            title: string;
            subtitle: string;
            image: string;
        }[];
    };
    layouts: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        flats: {
            image: string;
            title: string;
            subtitle: string;
            area: string;
        }[];
    };
    form: {
        title: string;
        subtitle: string;
        button: string;
        name: string;
        phone: string;
    };
    company: {
        description: string;
        description_1: string;
        image: string;
        button: string;
        logo: string;
    };
    service: {
        image: string;
        image_1: string;
        description_1: string;
        description_2: string;
        button: string;
        info: string;
    };
    footer: {
        op: string;
        word_days: string;
        phone: string;
        company_logo: string;
        logo: string;
        socials: {
            name: string;
            link: string;
        }[];
        pages: {
            title: string;
            alias: string;
        }[];
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
