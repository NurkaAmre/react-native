import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, SectionList} from 'react-native';
import pokemonList from "./data.json";
import groupedPokemonList from "./groupedData.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
        console.log(pokemon.id)
        return (
          <View key={pokemon.id} style={styles.card}>
            <Text style={styles.cardText}>{pokemon.type}</Text>
            <Text>{pokemon.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
      <View style={styles.scrollView}>
            {/* <FlatList data={pokemonList} renderItem={({ item }) => {
          return (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text>{item.name}</Text>
          </View>
        )
      }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>Nothing is there</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>I am Header</Text>}
          ListFooterComponent={<Text style={styles.headerText}>I am Footer</Text>}
      /> */}
        <SectionList sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            )
          }}
          renderSectionHeader={({section}) => {
            <Text style={styles.sectionHeader}>
              {section.type}
              console.log(section.type)
            </Text>
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "plum",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 40,
    color: 'red',
    textAlign: "center",
    marginBottom: 16,
    marginTop:20,
  },
  sectionHeader: {
    fontSize: 26,
    color: "#000",
    backgroundColor: "#fff",
  }
});
