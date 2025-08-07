import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = () => {
  const params = useLocalSearchParams<{query?: string}>();
  const [query, setQuery] = useState(params.query);

  const handleSearch = (text : string) =>{
    
  }
  return (
    <View className='searchbar'>
      <TextInput 
        className='flex-1 p-5'
        placeholder='Search for pizzas, burgers...'
        value={query}
      />
    </View>
  )
}

export default SearchBar