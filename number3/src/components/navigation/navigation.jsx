import React from "react";
import "./navigation.scss";
import Bitcoin from "../../assets/bitcoin-cryptocurrency-3d-render-png.png";

function navigation() {
	return (
		<div>
			<navigation>
				<div className="navigation">
					<img src={Bitcoin} alt="site logo here" />
					<ul className="links">
						<li>Resources</li>
						<li>Developers</li>
						<li>About</li>
					</ul>
				</div>
			</navigation>
		</div>
	);
}

export default navigation;
