import React, { useState, useRef, useEffect } from 'react';
// import './index.less'

const PageShow = () => {
  const [type,setType]=useState(0)
	const [count, setCount] = useState(0);
	const [persisted, setPersisted] = useState(false);
	useEffect(() => {
		// window.addEventListener('pageshow', (event) => {
		//   console.log('after , pageshow :', event)
		//   alert('after , pageshow')
		// })

		window.addEventListener(
			'pageshow',
			function (event) {
				console.log('PageShow Event  ' + event.persisted);
				setPersisted(event.persisted);
        setCount(count + 1);
        setType(window.performance.navigation.type)
				
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
      <div>performance type: {type}</div>
			<div>page show: {count}</div>
			<div>persisted :{persisted?1:0}</div>
		</div>
	);
};

export default PageShow;
