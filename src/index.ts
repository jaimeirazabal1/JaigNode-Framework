
import {Server} from './classes/serve';

try {
    
    const servidor = new Server(__dirname);
    servidor.deployRoutes();
    servidor.start();

} catch (error) {
    console.log(error);
}