// script.js
// 未来可以在这里添加交互功能，例如：
// - 表格排序
// - 按年份筛选台风
// - 点击台风显示更详细信息弹窗

document.addEventListener('DOMContentLoaded', () => {
    console.log('台风信息页面已加载');

    // 示例：为表格行添加点击效果 (可选)
    const tableRows = document.querySelectorAll('#typhoon-list tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            // 移除其他行的选中状态
            tableRows.forEach(r => r.classList.remove('selected'));
            // 添加当前行的选中状态
            row.classList.add('selected');
            // 可以在这里显示更多信息，或者只是一个视觉提示
            console.log('点击了台风:', row.cells[1].textContent);
        });
    });
});

// 你可以在 style.css 中添加 .selected 样式
// 例如:
// #typhoon-list tbody tr.selected {
//    background-color: #cce5ff;
// }