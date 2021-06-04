export class About {
    idAbout: number;
    creDate: string;
    aboutDetails: AboutDetail[];
}

export interface AboutDetail {
    idAboutDetail: number;
    idAbout: number;
    idLanguage: number;
    title: string;
    description: string;
    image: string;
}
