import React from 'react';
import renderer from 'react-test-renderer';
import LogPage from 'plugins/log/components';
import { themed, provider } from 'utils/tests';

describe('plugins/log/components', () => {
  xit('renders correctly', () => {
    jest.mock('oboe');
    const tree = renderer.create(provider(themed(<LogPage height={100} width={100} />), {
      log: {
        lines: '400',
        query: '',
        connected: true,
        messages: [],
      },
    })).toJSON();
    expect(tree).toMatchSnapshot();
    jest.unmock('oboe');
  });
});
