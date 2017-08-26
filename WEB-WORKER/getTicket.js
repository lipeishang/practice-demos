/**
 * Created by lipeishang on 17-8-20.
 */
var rand = Math.floor(Math.random()*101);
//模拟10%的概率抢到票
if(rand<10){
    postMessage(1);
}else{
    postMessage(0);
}