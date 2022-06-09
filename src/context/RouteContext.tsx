import { createContext } from "react";

export interface RouteContextState {
	data: RouteData;
	filters: Filter;
	updateFilters: (f: Filter) => void;
	updatePII: (i: number, t: string, h: string) => void;
}

export interface RouteData {
	api: string;
	method: string;
	path: string;
	request: DataDetails;
	response: DataDetails;
}

export interface DataDetails {
	[key: string]: Details[];
}

export interface Filter {
	search: string;
	piiOnly: boolean;
	clearForceShow: boolean;
}

export interface Details {
	name: string;
	pii: boolean;
	masked: boolean;
	type: string;
}

export const defaultState: RouteContextState = {
	data: {} as RouteData,
	filters: { search: "", piiOnly: false, clearForceShow: false },
	updatePII: () => {},
	updateFilters: () => {},
};

export const RouteContext = createContext<RouteContextState>(defaultState);
