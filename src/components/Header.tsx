import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
	method: string;
	api: string;
	path: string;
};

const Header = ({ method, api, path }: HeaderProps) => {
	return (
		<div className='header'>
			<div className='flex'>
				<h2>{method}</h2>
				<h1>{path}</h1>
			</div>
			<div className='breadcrumbs'>
				<p>
					<strong>
						All APIs
						<span className='separator-icon'>
							<FontAwesomeIcon size='xs' icon={faAngleRight} />
						</span>
						{path}
						<span className='separator-icon'>
							<FontAwesomeIcon size='xs' icon={faAngleRight} />
						</span>
					</strong>
					{api}
				</p>
			</div>
			<hr />
		</div>
	);
};

export default memo(Header);
