import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Row from "./Row";
import {
	Details,
	RouteContext,
	RouteContextState,
} from "../context/RouteContext";

type CollapsableGroupProps = {
	header: string;
	rows: Details[];
};

const CollapsableGroup = ({ header, rows }: CollapsableGroupProps) => {
	const { filters } = useContext<RouteContextState>(RouteContext);
	const [open, setOpen] = useState<boolean>(true);
	const title =
		header === "urlParams"
			? "URL Parameters"
			: header === "queryParams"
			? "Query Parameters"
			: header;

	return (
		<div className={`group ${open ? "open" : "closed"}`}>
			<div className='flex group-header' onClick={() => setOpen(!open)}>
				<span className='circle-icon'>
					<FontAwesomeIcon size='xs' icon={faCaretRight} />
				</span>
				{title}
			</div>
			<div className='group-body'>
				{rows.map((row: Details, i: number) => {
					return row.name.includes(filters.search.toLocaleLowerCase()) ||
						row.type.includes(filters.search.toLocaleLowerCase()) ? (
						<Row header={header} details={row} index={i} key={i} />
					) : null;
				})}
			</div>
		</div>
	);
};

export default CollapsableGroup;
