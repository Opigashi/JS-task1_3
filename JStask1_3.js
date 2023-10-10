'use strict';

function showTitle(){
    console.log('=====================');
    console.log('現在持っているタスクの一覧');
    console.log('=====================');
}

showTitle();

const tasks = [
    '掃除',
    '買い物',
    '散歩',
];

for (let i = 0; i < tasks.length; i++) {
    console.log(i + '：' + tasks[i]);
}

tasks.push(prompt('タスクを入力してください'));

showTitle();

for (let i = 0; i < tasks.length; i++) {
    console.log(i + '：' + tasks[i]);
}