export class Response {
    httpStatusCode: number = 200;
    success: boolean = true;
    message: string = 'Iniciando';
    data: object = {
        "name": "triangle",
        "base": 0,
        "height": 0,
        "area": 0
    };
}
