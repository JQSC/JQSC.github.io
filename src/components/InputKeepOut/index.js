import { useEffect } from 'react';
import './index.styl';

const InputKeepOut = () => {
	useEffect(() => {
		const metaTag = document.createElement('meta');

		// 设置 meta 元素的属性
		metaTag.name = 'viewport';
		metaTag.content =
			'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover';

		// 获取文档的 head 元素
		const head = document.head || document.getElementsByTagName('head')[0];

		// 将 meta 元素插入到 head 元素中
		head.appendChild(metaTag);
	}, []);

	return (
		<div className="input-keep-out">
			<div className="input-keep-out__title">键盘弹出遮挡输入框</div>
			<div className="input-keep-out__height">固定高度</div>
			<div className="input-keep-out__input">
				<input type="text" placeholder="请输入" />
			</div>
		</div>
	);
};

export default InputKeepOut;
