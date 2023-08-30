import React, { useState, useRef, useEffect } from 'react';
// import './index.less'

const PageShow = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		// window.addEventListener('pageshow', (event) => {
		//   console.log('after , pageshow :', event)
		//   alert('after , pageshow')
		// })

		window.addEventListener(
			'pageshow',
			function (event) {
				// console.log("监听pageshow");
				alert('咦？就知道你会回来的！');
				// if (
				// 	event.persisted ||
				// 	(window.performance && window.performance.navigation?.type == 2)
				// ) {
				// 	alert('咦？就知道你会回来的！');
				// }
				setCount(count + 1);
			},
			false
		);
	}, []);

	const handleClick = () => {
		window.location.href = 'https://mc.liepin.com/vip';
	};

	const handleClicl2 = () => {
		window.open('https://mc.liepin.com/account/edittel/');
	};

	return (
		<div>
			<div>
				<h2>跳转当前页</h2>
				<button onClick={handleClick}>跳转</button>
			</div>
			<div>
				<h2>打开新页面</h2>
				<button onClick={handleClicl2}>打开</button>
			</div>
			<div>page show: {count}</div>
		</div>
	);
};

export default PageShow;
