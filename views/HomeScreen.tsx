import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import GlobalStyles from '../styles/global.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {useMarkets} from '../hooks/market.hooks';
import 'moment/locale/ar-tn';
import moment from 'moment';

const HomeScreen = ({navigation}) => {
  moment.locale('ar-tn');
  const {isMarketFetchingLoading, marketsData} = useMarkets();
  useEffect(() => {
    console.log('Market Data', marketsData);
  }, [isMarketFetchingLoading]);

  const renderItem = ({item}) => (
    <CollapsibleView
      touchableWrapperStyle={styles.collapsibleTouchable}
      noArrow
      title={
        <View style={styles.cardHeader}>
          <Text style={styles.textWhite}>
            {item.products.length !== 0 ? moment(item.products[0].createdAt).fromNow() : ''}
          </Text>
          <View style={styles.cardContent}>
            <View style={styles.marketInfo}>
              <Text style={styles.marketTitle}>{item.marketName}</Text>
              {/* <Text style={styles.marketSubTitle} numberOfLines={1}>
                {item.products.length !== 0 && item.products[0].description}
              </Text> */}
            </View>
            <View style={styles.productCount}>
              <Text style={styles.productCountText}>{item.products.length}</Text>
            </View>
            <Image
              source={require('../assets/images/marcher.jpg')}
              style={styles.marketImage}
            />
          </View>
        </View>
      }
      style={styles.collapsible}
    >
      <View style={styles.containerStyle}>
        {item.products.map(elm => (
          <View key={elm._id} style={styles.productRow}>
            {/* <Text style={styles.textWhite}>{moment(elm.createdAt).fromNow()}</Text> */}
            <Text style={styles.textWhite}>{elm.description}</Text>
          </View>
        ))}
      </View>
    </CollapsibleView>
  );

  return (
    <View style={[GlobalStyles.mainContainer, styles.mainContainer]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.replace('Main')}>
          <MaterialCommunityIcons name="location-exit" size={34} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.textTitle}>مرحبا بكم في البورص</Text>
        <TouchableOpacity>
          <Feather name="globe" size={34} color="#FFF" />
        </TouchableOpacity>
      </View>
      {marketsData && marketsData.marketList && (
        <FlatList data={marketsData.marketList} renderItem={renderItem} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0D1A27',
    padding: 0,
    
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#FF7901',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    
  },
  cardHeader: {
    width: '100%',
    minHeight: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 10,
    
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginRight: 10,
  },
  marketInfo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    
  },
  marketTitle: {
    fontWeight: '600',
    fontSize: 17,
    color: '#FFF',
  },
  marketSubTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#FFF',
    flexShrink: 1,
    flexWrap: 'wrap',
    
  },
  productCount: {
    width: 30,
    height: 30,
    backgroundColor: '#FF7901',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  productCountText: {
    fontWeight: '600',
    color: '#FFF',
  },
  marketImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  collapsible: {
    backgroundColor: '#192b3d',
    width: '100%',
    borderWidth: 0,
  },
  collapsibleTouchable: {
    elevation: 10,
    // backgroundColor:'red'
    borderRadius: 19,
    width: '95%',
  },
  containerStyle: {
    width: '100%',
    justifyContent: 'flex-end',
    // backgroundColor:'red'
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:'15%',
    paddingVertical: 20,
    
  
    
  },
  textWhite: {
    color: '#FFF',
    fontSize: 14,
    
  },
});
