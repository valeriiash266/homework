async function speedtest(getPromise, count, parallel = 1) {
    const start = performance.now();
    let totalDuration = 0;

    for (let i = 0; i < count; i++) {
        const startParallel = performance.now();
        const promises = [];

        for (let j = 0; j < parallel; j++) {
            promises.push(getPromise());
        }

        await Promise.all(promises);
        const endParallel = performance.now();
        totalDuration += endParallel - startParallel;
    }

    const end = performance.now();
    const duration = end - start;
    const querySpeed = parallel / totalDuration;
    const queryDuration = totalDuration / (count * parallel);
    const parallelSpeed = (count * parallel) / duration;
    const parallelDuration = totalDuration / count;

    return {
        duration,
        querySpeed,
        queryDuration,
        parallelSpeed,
        parallelDuration
    };
}

const delay = ms => new Promise(ok => setTimeout(ok, ms));

document.getElementById('start-button').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Testing...';

    const testResult = await speedtest(() => delay(1000), 10, 10);

    resultDiv.innerHTML = `
      <p>Duration: ${testResult.duration.toFixed(2)} ms</p>
      <p>Query Speed: ${testResult.querySpeed.toFixed(3)} queries/ms</p>
      <p>Query Duration: ${testResult.queryDuration.toFixed(2)} ms/query</p>
      <p>Parallel Speed: ${testResult.parallelSpeed.toFixed(2)} queries/ms</p>
      <p>Parallel Duration: ${testResult.parallelDuration.toFixed(2)} ms</p>
    `;
});