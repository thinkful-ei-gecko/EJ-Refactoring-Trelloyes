import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<List header='Trelloyes' cards={[{id: 'a', title: 'test snapshot', content: 'content' }, {id: 'b', title: 'test snapshot 2', content: 'more content'}]} />, div)

        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<List />', () => {
    it('renders UI correctly', () => {
        const tree = renderer.create(<List header="test header" cards={[{id: 'a', title: 'test snapshot', content: 'content' }, {id: 'b', title: 'test snapshot 2', content: 'more content'}]} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})