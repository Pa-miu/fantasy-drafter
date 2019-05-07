export const teamoptions = [
	{value: 'CHC',	label: 'CHC'},
	{value: 'CHW',	label: 'CHW'},
	{value: 'CIN',	label: 'CIN'},
	{value: 'CLE',	label: 'CLE'},
	{value: 'COL',	label: 'COL'},
	{value: 'DET',	label: 'DET'},
	{value: 'HOU',	label: 'HOU'},
	{value: 'KC',		label: 'KC'},
	{value: 'LAA',	label: 'LAA'},
	{value: 'LAD',	label: 'LAD'},
	{value: 'MIA',	label: 'MIA'},
	{value: 'MIL',	label: 'MIL'},
	{value: 'MIN',	label: 'MIN'},
	{value: 'NYM',	label: 'NYM'},
	{value: 'NYY',	label: 'NYY'},
	{value: 'OAK',	label: 'OAK'},
	{value: 'PHI',	label: 'PHI'},
	{value: 'PIT',	label: 'PIT'},
	{value: 'SD',		label: 'SD'},
	{value: 'SEA',	label: 'SEA'},
	{value: 'SF',		label: 'SF'},
	{value: 'STL',	label: 'STL'},
	{value: 'TB',		label: 'TB'},
	{value: 'TEX',	label: 'TEX'},
	{value: 'TOR',	label: 'TOR'},
	{value: 'WAS',	label: 'WAS'}
];

export const multiselectstyle = {
	control: (provided, { isFocused }) => { 
		return {
			...provided, 
			'&:hover' : {borderColor: '#4997e5'},
			backgroundColor: '#191f21', 
			borderColor: 
				isFocused ? 
					'#4997e5' : '#4b4d4f',
			boxShadow: 'none'
		};
	},
	option: (provided, { isFocused }) => {
		return {
			...provided,
			backgroundColor: isFocused ? '#5489d8' : null,
			color: isFocused ? '#dceded' : null
		};
	},
	menu: provided => ({...provided, backgroundColor: '#191f21' }),
	multiValue: provided => ({...provided, backgroundColor: '#4997e5'}),
	multiValueLabel: provided => ({...provided, color: '#dceded'}),
	valueContainer: provided => ({...provided, height: '2em'})
};

export const modularselectstyle = {
	container: provided => ({...provided, width: '100%'}),
	control: (provided, { isFocused }) => { 
		return {
			...provided, 
			'&:hover' : {borderColor: '#4997e5'},
			backgroundColor: '#191f21', 
			borderColor: 
				isFocused ? 
					'#4997e5' : '#4b4d4f',
			boxShadow: 'none',
			padding: '0'
		};
	},
	option: (provided, { isFocused }) => {
		return {
			...provided,
			backgroundColor: isFocused ? '#5489d8' : null,
			color: isFocused ? '#dceded' : null
		};
	},
	menu: provided => ({...provided, backgroundColor: '#191f21' }),
	singleValue: provided => ({...provided, color: '#dceded'}),
	valueContainer: provided => ({...provided, height: '2em'})
};