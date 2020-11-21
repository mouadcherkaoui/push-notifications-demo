class EventObserver {
    construtor() {
        this.observers = [];
    }

    subcscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }   

    broadcast(data) {
        this.observers.forEach(susbscriber => {
            subscriber(data);
        });
    }
}