import PropTypes from "prop-types"

import "./Select.scss"

const SelectField = ({ name, onChange, onBlur, defaultValue = " -- select an option -- " }) => {
	const optionList = []

	for (let i = 18; i <= 100; i++) {
		optionList.push({ value: i, label: i })
	}

	return (
		<div className="select">
			<select name={name} onChange={onChange} onBlur={onBlur} defaultValue={""}>
				<option value="">{defaultValue}</option>
				{optionList.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectField
