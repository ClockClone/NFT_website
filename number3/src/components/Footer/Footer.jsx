import React from "react";
import "./Footer.scss";
import Bitcoin from "../../assets/bitcoin-cryptocurrency-3d-render-png.png";

function Footer() {
	return (
		<div>
			<div className="footer_container">
				<footer>
					<img id="footerLogo" src={Bitcoin} alt="footer logo" />
					<p>© Bitcoin</p>
				</footer>
			</div>
		</div>
	);
}

export default Footer;
