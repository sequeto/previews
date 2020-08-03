import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo () {

  const history = useHistory();
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({ titulo }) => titulo); 
  const { handleChange, values} = useForm({
    titulo: '',
    url: '',
    categoria:''
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
        setCategorias(categorias);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaId = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log('categoriaEscolhida', categoriaId);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaId.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}>
        
        <FormField
          label="Título da Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL da Vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

      <Button type="submit">
          Cadastrar
      </Button>
      </form>

      <Link to='/cadastro/categoria'>
        Cadastrar categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;