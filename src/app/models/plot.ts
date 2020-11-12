export class Plot{
    id: number;
    host: string;
    port: number;
    channels: Channel[];

    constructor(id: number, host: string, port?: number, channels?: Channel[]) {
        this.id = id;
        this.host = host;
        this.port = port || 80;
        this.channels = channels || [];
    }
}


export class Channel {
    id: number;
    name: string;
    irrigation: boolean;
    fertilizer: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.irrigation = false;
        this.fertilizer = false;
    }
}
