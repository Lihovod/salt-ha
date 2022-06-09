import React, { useContext, useEffect, useState } from "react";
import {
	RouteContext,
	RouteContextState,
	Details,
} from "../context/RouteContext";
import Badge from "./Badge";

type RowProps = {
	header: string;
	index: number;
	details: Details;
};

const Row = ({ header, index, details }: RowProps) => {
	const { updatePII, filters } = useContext<RouteContextState>(RouteContext);
	const [forceShow, setForceShow] = useState(false);

	const updateRow = (type: string) => {
		setForceShow(true);
		updatePII(index, type, header);
	};

	useEffect(() => {
		setForceShow(false);
	}, [filters]);

	return (filters.piiOnly ? details.pii : true) || forceShow ? (
		<div className='row flex shadow'>
			<div className='col'>{details.name}</div>
			<div className='col' onClick={() => updateRow("pii")}>
				<Badge color='navy' shape={details.pii ? "" : "outline"} text='PII' />
			</div>
			<div className='col' onClick={() => updateRow("masked")}>
				<Badge
					color='purple'
					shape={details.masked ? "" : "outline"}
					text='Masked'
				/>
			</div>
			<div className='col'>
				<Badge text={details.type} />
			</div>
		</div>
	) : null;
};

export default Row;
