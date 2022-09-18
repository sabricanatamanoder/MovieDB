import './App.css';
import { useEffect, useState } from "react";
import Movie from "./Movie"
import Filter from './Filter';

function App() {
  // Üç useState hook'umuz var,biri API, diğeri filtreleme, öteki ise film türleri için //
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  //fetchPopular fonksiyonunu sayfa yüklendiğinde yalnızca bir kez çalıştır diyoruz. //
  useEffect(() => {
    fetchPopular();
  }, []);

  //Asenkron fonksiyonumuz içinde veriyi çekip data değişkenine atıyor, daha sonra ise
  //veriyi json formatında okunur hâle getirip başka bir fonksiyona atıyoruz. Ardından
  //console.log'a movies değişkenimizi bastığımızda, gelen objenin içindeki verinin results
  //içinde olduğunu görüyoruz. Sonuçlara movies.results şeklinde ulaşabileceğimiz anlamına geliyor bu.
  //Bu verileri hem setPopular'a hem de setFiltered'e atıyoruz.
  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&page=1`)
    const movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
  }

    //Map metoduyla ulaştığımız verinin kopyasını alıyor ve her bir elemente movie adını veriyoruz.
    //Movie componentımızı bu map metoduyla yazdırmak istediğimizde, çekmek istediğimiz 20
    //elementin tamamının title'ı ve fotoğrafı ekrana artık yazdırılabiliyor. her elementin id'sini
    //alıyoruz ki, hatayla karşılaşmayalım. 
    //Filter componentımıza kullanacağımız propsları atıyoruz.
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className='popular-movies'>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;
