import app from './app';
import { serverBootstrap } from './app/bootstrap/server';


(async () => {
    const server = new serverBootstrap(app);
    try {
        await server.initialize();
    } catch (error) {
        console.log(error);
    }
})()