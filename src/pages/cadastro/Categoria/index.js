/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: ''
  };
  
  const {handleChange, values} = useForm(valoresIniciais);
  const [categorias, setCategoria] = useState([]);
  const history = useHistory();
  

  useEffect(() => {

    const URL = 'http://localhost:8080/categorias';
      
    fetch(URL)
      .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok){
          const resposta = await respostaDoServer.json();
          setCategoria([ ...resposta]);
        }
    })
    
  }, []);


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        setCategoria([
          ...categorias,
          values,
        ]);

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/cadastro/video');
          });
      }}
      >

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <h2>Categorias:</h2>
      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
