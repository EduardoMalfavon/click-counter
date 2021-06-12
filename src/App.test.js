import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(wrapper.exists()).toBe(true);
  expect(appComponent.length).toBe(1);
});

test("render increment button", () => {});

test("renders counter display", () => {});

test("counter display starts at 0", () => {});

test("click button increments counter display", () => {});
