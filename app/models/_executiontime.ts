export class ExecutionTime {
    public deleteTime: number = 0;
    public findTime: number = 0;
    public saveTime: number = 0;

    constructor(object?: Partial<ExecutionTime>) {
        if (object) {
            Object.assign(this, object);
        }
    }

    public getDeleteTime(): number | undefined {
        return this.deleteTime;
    }

    public getFindTime(): number | undefined {
        return this.findTime;
    }

    public getSaveTime(): number | undefined {
        return this.saveTime;
    }

    public toJSON(): Partial<ExecutionTime> {
        return {
            deleteTime: this.deleteTime,
            findTime: this.findTime,
            saveTime: this.saveTime,
        }
    }
}