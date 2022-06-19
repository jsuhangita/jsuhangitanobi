import React, {useEffect, useState} from 'react';
import {Container, SearchBar, Text} from '../../components';
import {errorHandler} from '../../util/helper.util';
import {fetchCoinList} from '../../request/trade.request';
import {FlatList, StyleSheet, View} from 'react-native';
import {Image} from '@rneui/themed';
import {filter} from 'lodash';

export default function TradePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [coinList, updateCoinList] = useState([]);
  const [savedAllCoinList, updateSavedAllCoinList] = useState([]);

  async function _getData() {
    try {
      const res = await fetchCoinList();
      updateCoinList(res);
      updateSavedAllCoinList(res);
    } catch (e) {
      errorHandler(e);
    }
  }

  function _renderItem({item}) {
    const {ticker, image, amount} = item;
    return (
      <View style={styles.coinContainer}>
        <View style={styles.coinInfoContainer}>
          <Image source={{uri: image}} style={styles.coinLogo} />
          <Text bold medium>
            {ticker}
          </Text>
        </View>
        <Text medium>{Number(amount).toFixed(8)}</Text>
      </View>
    );
  }

  useEffect(() => {
    _getData().then();
  }, []);

  function _onChangeSearchText(text) {
    const formattedText = text.toUpperCase();
    setSearchTerm(formattedText);
    // const temp = savedAllCoinList;
    const filtered = filter(savedAllCoinList, ({ticker}) => {
      return ticker.search(formattedText) > -1;
    });
    updateCoinList([...filtered]);
  }

  return (
    <Container>
      <SearchBar value={searchTerm} onChangeText={_onChangeSearchText} />
      <FlatList
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 100}}
        data={coinList}
        renderItem={_renderItem}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.15)',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  coinInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});
