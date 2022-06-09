import React, { useCallback, useEffect, useState } from "react";
import Tabs, { ActiveTab } from "./components/Tabs";
import Header from "./components/Header";
import Table from "./components/Table";
import { RouteContext, RouteData, Filter } from "./context/RouteContext";
import Filters from "./components/Filters";
import Spinner from "./components/Spinner";

const App = () => {  
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<RouteData>({} as RouteData);
	const [filters, setFilters] = useState<Filter>({
		search: "",
		piiOnly: false,
    clearForceShow: false
	});
	const [activeTab, setActiveTab] = useState<ActiveTab>("request");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		const data = await response.json();
		setData(data);
		setLoading(false);
	};

	const updatePII = (index: number, type: string, header: string) => {
		const value = (data[activeTab] as any)[header][index][type];
		const updatedData = Object.assign({}, data);
		(updatedData[activeTab] as any)[header][index][type] = !value;
		setData(updatedData);
	};

	const updateFilters = (filter: Filter) => {
		setFilters(filter);
	};


  const updateActiveTab = useCallback((tab: ActiveTab) => setActiveTab(tab), []);

	return (
		<RouteContext.Provider
			value={{
				data,
				updatePII,
				filters,
				updateFilters,
			}}
		>
			{!loading ? (
				<>
					<div className='white-bg shadow container'>
						<Header method={data.method} api={data.api} path={data.path} />
						<Tabs
							activeTab={activeTab}
							updateActiveTab={updateActiveTab}
						/>
					</div>
					<div className='container'>
						<Filters />
						<Table activeTab={activeTab} />
					</div>
				</>
			) : (
				<Spinner />
			)}
		</RouteContext.Provider>
	);
};

export default App;
