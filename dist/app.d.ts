import * as express from "express";
declare class App {
    app: express.Application;
    private readonly mongoUrl;
    private readonly PORT;
    constructor();
    private init;
    private setCors;
    private setBodyParser;
    private setUpMongoDb;
    private listen;
}
declare const _default: App;
export default _default;
