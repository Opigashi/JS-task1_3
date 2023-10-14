'use strict';

const showTitle = () => {
    console.log('=====================');
    console.log('現在持っているタスクの一覧');
    console.log('=====================');
}

const tasks = [
    '掃除',
    '買い物',
    '散歩',
];

const listUp = () => {
    for (let i = 0; i < tasks.length; i++) {
        console.log(i + '：' + tasks[i]);
    }
}

showTitle();
listUp();

tasks.push(prompt('タスクを入力してください'));

showTitle();
listUp();