import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllCategoriesWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok){
            const resposta = await respostaDoServer.json();
            return resposta;
        }

        throw new Error('Não foi possível acessar os dados');
    })
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
      .then(async (respostaDoServer) =>{
      if(respostaDoServer.ok){
          const resposta = await respostaDoServer.json();
          return resposta;
      }

      throw new Error('Não foi possível acessar os dados');
  })
}

function create(obj) {
    return fetch(`${URL_CATEGORIES}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível cadastrar os dados :(');
      });
  }

export default {
    getAllCategoriesWithVideos,
    create,
    getAll
}