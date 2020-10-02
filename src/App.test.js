import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import App from './App';
import Card from './components/card/Card'


it('Pages App running without crash', () => {
  shallow(<App />);
});

it('Render Join Us Title', () => {
  const wrapper = mount(<App />);
  const header = <h5><b>Hacktiv8 Meeting</b></h5>
  expect(wrapper.contains(header)).toEqual(true);
});

describe('Content Description Test', () => {
  it('Location', () => {
    const wrapper = shallow(<Card />);
    const location = wrapper.find("#location").first().text();
    expect(location).toEqual("Location : ");
  });

  it('Member', () => {
    const wrapper = shallow(<Card />);
    const member = wrapper.find("#member").text();
    expect(member).toEqual("Member : ");
  });

  it('Organizer', () => {
    const wrapper = shallow(<Card />);
    const organizer = wrapper.find("#organizer").text();
    expect(organizer).toEqual("Organizer : ");
  });
})







