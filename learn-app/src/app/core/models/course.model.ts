export interface Course {
    id: number;
    title: string;
    content?: Array<string>;
    description?: string;
    duration: number;
    courseTime: number;
    creationDate: number;
}
