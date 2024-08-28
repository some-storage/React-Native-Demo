import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchInput from '../../common/searchInput';
import ProductCell from './components/productCell';
import {useEffect, useState} from 'react';
import {instance} from '../../util/api/axios';
import {IProductInfo} from './types';
import {AxiosError} from 'axios';

const ProductPage = () => {
  const [productList, setProductList] = useState<IProductInfo[]>([]);
  const [isLoding, setIsLoding] = useState<boolean>(true);
  const [searchContent, setSearchContent] = useState<string>('');

  useEffect(() => {
    setIsLoding(true);
    const getProductList = async () => {
      let response = await instance
        .get<IProductInfo[]>('/products')
        .catch((res: AxiosError) => {
          console.log(res.toJSON());
          return undefined;
        });
      if (response == undefined) return;

      setProductList(pre => [...response.data]);
      setIsLoding(false);
    };
    getProductList();
  }, []);

  return (
    <ScrollView bounces={false} style={{flex: 1}}>
      <View style={style.container}>
        <SearchInput
          searchContent={searchContent}
          setSearchContent={setSearchContent}
        />
        {isLoding ? (
          <Text style={{color: 'white', flex: 1}}>Loading..</Text>
        ) : (
          <FlatList
            style={{flex: 1}}
            data={productList.filter(
              ({title, category}) =>
                title.includes(searchContent) ||
                category.includes(searchContent),
            )}
            renderItem={({item}) => {
              return <ProductCell productInfo={item} />;
            }}
            ItemSeparatorComponent={() => <View style={{paddingVertical: 5}} />}
            scrollEnabled={false}
          />
        )}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, paddingVertical: 20, paddingHorizontal: 15, gap: 12},
});

export default ProductPage;
