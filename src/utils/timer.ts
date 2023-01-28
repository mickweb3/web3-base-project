export class Timer {
    private _forceUpdate = null;
    private _counter = 0;
    private _interval = null;

    lastTook = '';

    get times() {
        return this._counter;
    }

    start(forceUpdate?: Function) {
        if (this._interval) {
            return;
        }

        this.lastTook = '';
        this._forceUpdate = forceUpdate || function () {};
        this._interval = setInterval(() => {
            this._forceUpdate();
            this._counter += 1000;
        }, 1000);
    }

    end() {
        if (!this._interval) {
            return;
        }

        this.lastTook = this.display();
        this._counter = 0;
        clearInterval(this._interval);
        this._interval = null;
        // clear updater
        this._forceUpdate();
        this._forceUpdate = null;
    }

    display() {
        return new Date(this._counter).toLocaleTimeString().replace(/.*:(\d{1,2}:\d{1,2}).*/, '$1');
    }
}
