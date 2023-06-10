import React from 'react';

interface ISectionTitle {
	title: string;
	punctuation: string;
}

const SectionTitle = ({ title, punctuation }: ISectionTitle) => {
	return (
		<h1 className="text-blue0 font-montserrat font-semibold text-[40px] infoSection self-start w-max">
			{title} <span className="text-purple5">{punctuation}</span>
		</h1>
	);
};

export default SectionTitle;
