let logs = {};

let logger = {
    log(txt){
        console.log("logger.log");
        console.log(txt);
    },
    warn(warnng) {
        console.log("logger.warning");
        console.log(warnng);
    },
    error(err) {
        console.log("logger.error");
        console.log(err);
    },
    success(suc) {
        console.log("logger.success");
        console.log(suc);
    }
};

global.logger = logger;