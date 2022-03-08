import React, { useState } from "react";
import axios from "axios";

function ProductAdd({ onProductModalClose }) {
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qtde, setQtde] = useState("");
  const [purchase_price, setPurchase_price] = useState("");
  const [reference_price, setReference_price] = useState("");

  const registerProduct = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/products`,
      data: {
        code,
        category,
        name,
        description,
        qtde,
        purchase_price,
        reference_price,
      },
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        alert("Produto Cadastrado com sucesso!");
        setCode("");
        setCategory("");
        setName("");
        setDescription("");
        setQtde("");
        setPurchase_price("");
        setReference_price("");
        onProductModalClose();
      })
      .catch(function (erreur) {
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg mt-24 p-8 m-4 md:max-w-2xl md:mx-auto">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={registerProduct}
        >
          <div className="text-xl mb-8 text-gray-500">Inclusão de Produtos</div>

          <div className="flex justify-between ">
            {/* <div className="flex flex-col mb-4">
              <label
                htmlFor="code"
                className=" font-medium text-sm text-gray-500 "
              >
                Código
              </label>
              <input
                type="text"
                id="code"
                name="code"
                value={code}
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30 border-solid border-gray-300"
                onChange={(e) => setCode(e.target.value)}
              />
            </div> */}
            <div className="flex flex-col mb-4">
              {/* <label
                htmlFor="category"
                className=" font-medium text-sm text-gray-500 w-64"
              >
                Categoria
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30 px-2"
                onChange={(e) => setCategory(e.target.value)}
              /> */}
              <label
                htmlFor="category"
                className=" font-medium text-sm text-gray-500"
              >
                Tipo
              </label>
              <select
                id="options-select"
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
                placeholder="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="initial" className="flex flex-col mb-4">
                  -- Selecione uma opção --
                </option>
                <option
                  value="Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Branco
                </option>
                <option
                  value="Vermelho"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Vermelho
                </option>
                <option
                  value="Rosado"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Rosado
                </option>
                <option
                  value="Descartes"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Descartes
                </option>
                <option
                  value="Caipira"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Caipira
                </option>
                <option
                  value="Codorna"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Codorna
                </option>
                <option
                  value="Azul"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Azul
                </option>
                <option
                  value="Papelao_Diversos"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Papelão Diversos
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className=" font-medium text-sm text-gray-500"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="description"
              className=" font-medium text-sm text-gray-500"
            >
              Descrição
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* <div className="flex justify-between gap-3">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="purchase_price"
                className=" font-medium text-sm text-gray-500"
              >
                Qtde Estoque
              </label>
              <input
                type="text"
                id="qtde"
                name="qtde"
                value={qtde}
                className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-full border-solid border-gray-300"
                onChange={(e) => setQtde(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="purchase_price"
                className=" font-medium text-sm text-gray-500"
              >
                Preço de Compra
              </label>
              <input
                type="text"
                id="purchase_price"
                name="purchase_price"
                value={purchase_price}
                className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-full border-solid border-gray-300"
                onChange={(e) => setPurchase_price(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="reference_price"
                className=" font-medium text-sm text-gray-500"
              >
                Preço de Venda
              </label>
              <input
                type="text"
                id="reference_price"
                name="reference_price"
                value={reference_price}
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full border-solid border-gray-300"
                onChange={(e) => setReference_price(e.target.value)}
              />
            </div>
          </div> */}

          <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white  text-base mx-auto p-4 rounded w-full sm:w-auto">
            Cadastrar
          </button>
        </form>

        <div></div>
      </div>
    </div>
  );
}

export default ProductAdd;
