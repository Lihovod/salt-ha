import React, { memo } from "react";

type BadgeProps = {
	text: string;
	color?: string;
	shape?: string;
};

const Badge = ({ text, color = "teal", shape = "" }: BadgeProps) => {
	return <span className={`badge ${color} ${shape}`}>{text}</span>;
};

export default memo(Badge);
