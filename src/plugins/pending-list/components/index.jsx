import React, { PureComponent } from 'react';
import { NoPaddingWrapper } from 'components/styles';
import TabList from './TabList';

export default class PendingList extends PureComponent {
  state = {
    listId: false,
  }

  selectList = listId => this.setState({ listId })

  render() {
    const { listId } = this.state;

    return (
      <NoPaddingWrapper>
        <TabList
          listId={listId}
          selectList={this.selectList}
        />
      </NoPaddingWrapper>
    );
  }
}
