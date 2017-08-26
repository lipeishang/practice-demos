/**
 * Created by lipeishang on 17-8-20.
 */
// worker.js
console.log('WORKER TASK: ', 'running');
// 监听事件
onmessage = function (e) {
    console.log('WORKER TASK: ', 'RECEIVE', e.data);
    // 发送数据事件
    postMessage(hhh);
};