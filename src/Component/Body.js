import Card from './Card.js';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FetchData from './FetchData.js';
import { incrementQ, decrementQ, RemoveItem } from './Slice';
import { load } from './Slice2';

export default function Body() {
  const [Pokemons, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/1')
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  const [cardsPerPage, setcardsPerPage] = useState(12);
  const handleSelectionChange = (e) => {
    setCurrentPage(1);
    setprebutton(false);
    setIsNextDes(false);
    setcardsPerPage(parseInt(e.target.value, 10));
  };
  const [currentPage, setCurrentPage] = useState(1);

  let [IsNextDes, setIsNextDes] = useState(false);
  let [IsPreDes, setprebutton] = useState(false);
  let Sdex;
  let Edex;
  const nextPage = () => {
    if (Edex < Pokemons.length) {
      setprebutton(false);
      setCurrentPage((currentPage) => currentPage + 1);
    } else setIsNextDes(true);
  };
  const prevPage = () => {
    if (Sdex >= cardsPerPage) {
      setIsNextDes(false);
      setCurrentPage((currentPage) => currentPage - 1);
    } else setprebutton(true);
  };

  const dispatch = useDispatch();
  //const loaddata= ()=> dispatch(load(Pokemons))

  let da = useSelector((state) => state.datapok.Pokemons);

  useEffect(() => {
    dispatch(load('2'));
  }, []);

  if (Pokemons.length) {
    console.log(da);

    // Calcul du début et de la fin des cartes à afficher pour la page actuelle
    Sdex = (currentPage - 1) * cardsPerPage;
    Edex =
      Pokemons.length < Sdex + cardsPerPage
        ? Sdex + (Pokemons.length % cardsPerPage)
        : Sdex + cardsPerPage;

    /*console.log( cardsPerPage )

  console.log("Sdex="+ Sdex+"       Edex="+Edex+'    page='+currentPage+'    IsNextDes='+IsNextDes +'  IsPreDes=' +IsPreDes  )*/
  }

  return (
    <>
      <div className="container ">
        <div className="container d-flex justify-content-end">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            value={cardsPerPage}
            onChange={handleSelectionChange}
            style={{ width: '300px' }}
          >
            <option selected value="12">
              Nombre d'éléments par page
            </option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div class="row my-3 mt-2 ">
          {Pokemons.slice(Sdex, Edex).map((poke, index) => (
            <div className="col-md-3 mb-3 mx-auto " key={index}>
              <Card
                Id={poke.id}
                Name={poke.name}
                img={poke.image}
                stats={poke.stats}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center  my-3">
        <button
          type="button"
          class="btn btn-primary btn-sm mx-3 "
          style={{ width: '100px' }}
          onClick={() => prevPage()}
          disabled={IsPreDes}
        >
          Précédent
        </button>

        <button
          type="button"
          class="btn btn-primary btn-sm mx-3  "
          style={{ width: '100px' }}
          onClick={() => nextPage()}
          disabled={IsNextDes}
        >
          {' '}
          Suivant{' '}
        </button>

        <button
          type="button"
          class="btn btn-primary btn-sm mx-3  "
          style={{ width: '100px' }}
          onClick={() => loaddata()}
          disabled={IsNextDes}
        >
          {' '}
          load test{' '}
        </button>
      </div>
    </>
  );
}
