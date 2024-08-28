import {StyleSheet, Text, TextInput, View} from 'react-native';

type SearchInputProps = {
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({searchContent, setSearchContent}: SearchInputProps) => {
  return (
    <TextInput
      style={style.input}
      placeholder="검색"
      placeholderTextColor="#B5B5B5"
      defaultValue={searchContent}
      onChangeText={setSearchContent}
      autoCapitalize="none"
      autoComplete="off"
    />
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: '#5D5D5D',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    color: 'white',
  },
});

export default SearchInput;
