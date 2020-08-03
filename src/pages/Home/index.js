import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={'Clay vai à misteriosa floresta de Crystal Lake em busca de sua irmã desaparecida. Lá, ele encontra restos de velhas cabanas, aparentemente abandonadas. Apesar de ser avisado pelos oficiais e habitantes locais, ele resolve explorar o local juntamente com uma jovem, que está em um grupo que se formou para passar um final de semana de aventuras. O que eles não esperavam era encontrar Jason Voorhess, o assassino da máscara de hóquei.'}
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          )
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        )
      })}
      
    </PageDefault>
  );
}

export default Home;
