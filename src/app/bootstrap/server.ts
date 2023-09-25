import { Application } from 'express';
import { IBootstrap } from "./bootstrap.interface";
import http from 'http';

export class serverBootstrap implements IBootstrap {
    constructor(private readonly app: Application) { }
    async initialize(): Promise<boolean> {
        const promise = new Promise<boolean>((resolve, reject) => {
            const port = process.env.PORT || 3000;
            const server = http.createServer(this.app);

            server.listen(port)
                .on('listening', () => {
                    console.log(`Server running on port ${port}`);
                    resolve(true);
                })
                .on('error', (error: Error) => {
                    console.log(error);
                    reject(error)
                })
        })

        return await promise;
    }
}