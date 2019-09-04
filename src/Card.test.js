import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card.js';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Card title='testing' content='Hello' />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<Card />', () => {
    it('renders UI correctly', () => {
        const tree = renderer.create(<Card title="test" content="test content" />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})