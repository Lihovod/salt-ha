import React, { memo } from "react";

export type ActiveTab = "response" | "request";

type TabsProps = {
	activeTab: ActiveTab;
	updateActiveTab: (activeTab: ActiveTab) => void;
};

const Tabs = ({ activeTab, updateActiveTab }: TabsProps) => {
	return (
		<ul className='tabs flex'>
			<li
				onClick={() => updateActiveTab("request")}
				className={activeTab === "request" ? "active" : ""}
			>
				Request
			</li>
			<li
				onClick={() => updateActiveTab("response")}
				className={activeTab === "response" ? "active" : ""}
			>
				Response
			</li>
		</ul>
	);
};

export default memo(Tabs);
