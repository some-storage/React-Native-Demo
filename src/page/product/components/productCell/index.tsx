import {Image, StyleSheet, Text, View} from 'react-native';
import {IProductInfo} from '../../types';

type ProductCellProps = {
  productInfo: IProductInfo;
};

const ProductCell = ({productInfo}: ProductCellProps) => {
  return (
    <View id={productInfo.id.toString()} style={style.container}>
      <Image
        source={{
          uri: productInfo.image,
        }}
        style={style.image}
      />
      <View style={{gap: 8, flexShrink: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={style.titleText}>
            {productInfo.title}
          </Text>
          <View style={style.catagory}>
            <Text style={style.catagoryText}>{productInfo.category}</Text>
          </View>
        </View>
        <Text
          numberOfLines={5}
          ellipsizeMode="tail"
          lineBreakMode="clip"
          lineBreakStrategyIOS="push-out"
          style={style.subTitleText}>
          {productInfo.description}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 99,
  },
  titleText: {
    flexShrink: 1,
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  subTitleText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#A3A3A3',
  },
  catagoryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  catagory: {
    backgroundColor: '#4040FF',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
});

export default ProductCell;
