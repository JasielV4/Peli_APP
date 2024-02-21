import React, {useState} from 'react';
import { SafeAreaView, Text, Image, FlatList, StyleSheet, View, StatusBar } from 'react-native';

const App = () => {


  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
      description: "La batalla por la Tierra continúa en esta secuela de acción."
    },
    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
      description: "Un coche de carreras se encuentra en una ciudad olvidada donde aprende que la vida no se trata solo de la línea de meta."
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      description: "Los héroes más poderosos de la Tierra deben unirse y aprender a luchar en equipo si quieren detener al astuto Loki y su ejército alienígena."
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg',
      description: "En la España de 1944, una niña escapa a un laberinto mágico y oscuro. Un cuento de hadas fascinante dirigido por Guillermo del Toro."
    },
    {
      id: 5,
      name: "Ready Player One",
      director: "Ernest Cline",
      url: 'https://musicart.xboxlive.com/7/7faf5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      description: "La historia, ambientada en una distopía en 2045, sigue al protagonista Wade Watts en su búsqueda de un 'huevo de pascua' en un juego de realidad virtual a nivel mundial, cuyo descubrimiento le haría heredar la fortuna del creador del juego."
    },
    {
      id: 6,
      name: "El padrino",
      director: "Francis Ford Coppola",
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFnUIGQQtTzUxD9Y19nl3uum8SZA6TSA8eWnJoPy1UdHVF8fDn',
      description: "La saga épica de la familia Corleone en la mafia italiana de Nueva York. Un clásico del cine de crimen."
    },
    {
      id: 7,
      name: "Shrek 2",
    director: "Andrew Adamson",
    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFADKf7LWrP_r2PkPMo4zVxAdgoUK4KMtgRsfMSUTpisbpGG7N',
    description: "Shrek y Fiona viajan al Reino Muy Muy Lejano para conocer a los padres de Fiona. Sin embargo, las cosas no van como esperaban y se encuentran con la Hada Madrina, quien quiere que Fiona se case con su hijo, el Príncipe Encantador."
    },
    {
      id: 8,
      name: "Joker",
      director: "Todd Phillips",
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMYO-t9aVtNKNrXHGcNZu2BDEZJFoZnGZPCLOyXr4AjHGDiXFq',
      description: "Durante la década de 1980, un comediante fallido es llevado a la locura y se convierte en una figura de crimen y caos en la ciudad de Gotham, mientras se convierte en una infame figura del crimen psicopático."
    },
    {
      id: 9,
      name: "Demon Slayer: Kimetsu no Yaiba To the Swordsmith Village",
  director: "Haruo Sotozaki",
  url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOQEbNPb51_rQsrzmOAYJ48vXXGDXPEEZRiIuz12KIlTRKruk7',
  description: "Después de que su familia es brutalmente asesinada, un chico de buen corazón llamado Tanjiro Kamado decide convertirse en un Demon Slayer con la esperanza de convertir a su hermana menor Nezuko en humana. En esta película, Tanjiro, Zenitsu e Inosuke asisten al Sound Hashira Tengen Uzui contra los demonios hermanos Gyutaro y Daki."
    },
    {
      id: 10,
      name: "Godzilla Minus One",
      director: "Takashi Yamazaki",
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzBfhQFZ7bCcp53w0eMRZgpkbbWQSl35m3Hc_qLIXuQcbFRJrE',
      description: "La historia se desarrolla después de la Segunda Guerra Mundial en el Japón de la posguerra. Kōichi Shikishima, un piloto kamikaze que sobrevivió a la guerra, regresa a Tokio con una pesada carga de culpa del superviviente. La situación da un giro aterrador cuando Godzilla, mutado por pruebas nucleares, emerge y representa una grave amenaza para Japón."
    },
  ];


  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Welcome to Movies App! 🍿</Text>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              style={styles.image}
              source={{
                uri: item.url,
              }}
            />
            <View style={styles.movieInfo}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textDirector}>{item.director}</Text>
              <Text style={styles.textDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieItem: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  movieInfo: {
    marginLeft: 10,
  },
  textName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDirector: {
    color: '#aaa',
    fontSize: 14,
  },
  textDescription: {
    color: '#555',
    fontSize: 12,
  },
});

export default App;