var output = document.getElementById("result");

window.onload = function tuneSpark() {

    masterNodes = document.getElementById("masterNodes").value;
    executorNodes = document.getElementById("executorNodes").value;
    vCPUs = document.getElementById("vCPUs").value;
    ram = document.getElementById("RAM").value;

    //spark.executor.cores
    cores = 5;

    //spark.executor.memory
    //(vCPUs - 1)/ spark.executors.cores
    // Rounded down
    executorsperInstance = Math.floor((vCPUs - 1) / cores);

    totalExecutorMemory = Math.floor(ram / executorsperInstance);

    sparkExecutorsMemory = Math.floor(totalExecutorMemory * .90);
    memoryOverhead = Math.ceil(totalExecutorMemory * .10);

    executorInstances = (executorsperInstance * executorNodes) - 1
    defaultParallelism = executorInstances * cores * 2;

    document.getElementById("cores").innerHTML = "spark.executor.cores:" + cores;
    document.getElementById("memory").innerHTML = "spark.executor.memory:" + executorsperInstance;
    document.getElementById("executorsMemory").innerHTML = "spark.executors.memory:" + sparkExecutorsMemory;
    document.getElementById("memoryOverhead").innerHTML = "spark.yarn.executor.memoryOverhead:" + memoryOverhead;
    //Equal to spark.executors.memory
    document.getElementById("driverMemory").innerHTML = "spark.driver.memory:" + sparkExecutorsMemory;
    //Equal to executor cores
    document.getElementById("driverCores").innerHTML = "spark.driver.cores:" + cores;
    document.getElementById("executorInstances").innerHTML = "spark.executor.instances:" + cores;
    document.getElementById("defaultParallelism").innerHTML = "spark.default.parallelism:" + defaultParallelism;

}
