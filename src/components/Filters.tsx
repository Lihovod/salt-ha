import React, { ChangeEvent, memo, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RouteContext, RouteContextState, Filter } from "../context/RouteContext";

const Filters = () => {  
	const { filters, updateFilters } = useContext<RouteContextState>(RouteContext);
	const [fields, setFields] = useState<Filter>({ ...filters });

	const hangleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFields((f) => ({ ...f, [e.target.name]: value }));
	};

	const resetFilters = (): void => {
		const defaultFilters: Filter = { search: "", piiOnly: false, clearForceShow: false };
		setFields(defaultFilters);
		updateFilters(defaultFilters);
	};

  const applyFilters = () => {
    updateFilters({...fields, clearForceShow: fields.search === filters.search && fields.piiOnly === filters.piiOnly})
  }

	return (
		<div className='filters flex'>
			<div className='flex'>
				<FontAwesomeIcon
					className='search-icon'
					color='#595959'
					size='lg'
					icon={faMagnifyingGlass}
				/>
				<input
					value={fields.search}
					name='search'
					placeholder='Search'
					type='text'
					onChange={hangleChange}
				/>
				<button onClick={applyFilters} className='btn'>
					Apply
				</button>
				<div className='checkbox'>
					<input
						name='piiOnly'
						checked={fields.piiOnly}
						onChange={hangleChange}
						type='checkbox'
						id='pii'
					/>
					<label htmlFor='pii'>Show PII only</label>
				</div>
			</div>
			<span onClick={resetFilters} className='reset-filter'>
				Reset Filter
			</span>
		</div>
	);
};

export default memo(Filters);
