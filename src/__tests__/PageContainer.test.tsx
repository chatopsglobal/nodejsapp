import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import { PageContainer } from "../modules/components/PageContainer";

describe('Page container component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <PageContainer />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
