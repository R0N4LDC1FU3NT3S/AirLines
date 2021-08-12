import { shallow } from "enzyme"
import Select from "./Select"

describe("<Select />", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Select />)))

	it("#0. Snapshot", () => {
		expect(wrapper).toMatchSnapshot()
	})

	it("#1. Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})
})
