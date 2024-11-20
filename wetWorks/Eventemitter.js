


class EventEmitter {
    listeners = {}

    addListener(eventName, fn) {
       // console.log(Array.isArray(this.listeners[eventName]));

        this.listeners[eventName] = this.listeners[eventName] || []
       // console.log(Array.isArray(this.listeners[eventName]));

       // console.log(this.listeners);
        this.listeners[eventName].push(fn)
        // console.log(this.listeners);

        return this
    }
}

const events = new EventEmitter()
function hello() {
    console.log("hello world");

}
console.log(events.addListener("once", hello));
console.log(events.addListener("once", hello));
console.log(events.addListener("once", hello));
