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

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
