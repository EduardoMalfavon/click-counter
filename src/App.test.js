import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 *Factory function to create a ShalloWrapper for the App component
 *@function setup
 *@returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("click button increments counter display", () => {
  const wrapper = setup();
  //Find the button
  const button = findByTestAttr(wrapper, "increment-button");
  //Click the button
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  //Find the display, and test that the number has been incremented
  expect(count).toBe("1");
});

test("click button decrement counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});
