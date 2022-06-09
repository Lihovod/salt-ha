import React, { useContext } from "react";
import { RouteContext, RouteContextState } from "../context/RouteContext";
import CollapsableGroup from "./CollapsableGroup";
import { ActiveTab } from "./Tabs";

type TableProps = {
	activeTab: ActiveTab;
};

const Table = ({ activeTab }: TableProps) => {
	const { data } = useContext<RouteContextState>(RouteContext);

	return (
		<div className='table'>
			<div className='flex table-header'>
				<div className='col'>Name</div>
				<div className='col'>PII</div>
				<div className='col'>Masking</div>
				<div className='col'>Type</div>
			</div>
			<div className='table-body'>
				{Object.entries(data[activeTab]).map(([group, rows], i) => {
					return <CollapsableGroup header={group} rows={rows} key={i} />;
				})}
			</div>
		</div>
	);
};

export default Table;
