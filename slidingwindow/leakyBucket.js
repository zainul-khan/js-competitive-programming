class LeakyBucket {
    constructor(capacity, leakyRate) {
        this.capacity = capacity;
        this.leakyRate = leakyRate;
        this.queue = [];
        this.lastLeakTime = Date.now();
    }

    leak() {

        const now = Date.now();

        // How many requests should have leaked
        const elapsedSeconds = (now - this.lastLeakTime) / 1000;
        console.log("elapsedSeconds", elapsedSeconds)

        const requestsToLeak = Math.floor(
            elapsedSeconds * this.leakyRate
        );

        console.log("requestsToLeak", requestsToLeak)

        if (requestsToLeak > 0) {
            this.queue.splice(0, requestsToLeak);
            this.lastLeakTime = now;
        }
    }

    addRequest(reqName) {
        this.leak();
        if (this.queue.length >= this.capacity) {
            return console.error("Bucket full try after some time")
        }
        this.queue.push(this.reqName);
        console.log(reqName, "added successfully")
    }
}

const bucket = new LeakyBucket(5, 2)
bucket.addRequest("req1")
bucket.addRequest("req2")
bucket.addRequest("req3")
await new Promise((res) => setTimeout(() => res(), 3000))
bucket.addRequest("req4")
bucket.addRequest("req5")
bucket.addRequest("req6")
bucket.addRequest("req7")