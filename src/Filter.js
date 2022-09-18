import { useEffect } from "react";

//Propsları parametre olarak Filter fonksiyonumuza atıyoruz.
//useEffect fonksiyonumuzu, activeGenre her değiştiğinde, güncelle diyoruz.
//Koşullu ifademizde activeGenre 0'a eşitse, tüm filmleri listele ve döndürme komutu veriyoruz
//

function Filter({setActiveGenre, activeGenre, setFiltered, popular}) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre])
  
   
    //API'dan gelen veride, Comedy filmlerinin id'sinin 35, Action'un ise 28 olduğu görülüyor.
    //Tüm filmler için ise biz 0 id'sini verip bir fonksiyon yazıyoruz. Bu şekilde, butonlara bastığımızda
    //filmleri türlerine göre listeleyebiliriz.
    return(
        <div className="filter-container">
            <button onClick={() =>setActiveGenre(0)}>All</button>
            <button onClick={() =>setActiveGenre(35)}>Comedy</button>
            <button onClick={() =>setActiveGenre(28)}>Action</button>
        </div>
    )
}

export default Filter;