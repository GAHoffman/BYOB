import React from "react";
import { useState, useEffect } from "react";
import {
  useUpdateProduceMutation,
  useDeleteProduceMutation,
  useGetProduceQuery,
} from "../store/produceApi";
import { useParams } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import goldenplantas from "../Assets/goldenplantas.json";

const UpdateProduceFrom = () => {
  const { user_id, produce_id } = useParams();
  const { data: produce } = useGetProduceQuery(
    { user_id, produce_id },
    { skip: !produce_id }
  );
  const produceName = produce?.name;
  const produceQuantity = produce?.quantity;
  const produceWeight = produce?.weight;
  const produceDescription = produce?.description;
  const produceImageUrl = produce?.image_url;
  const produceExpDate = produce?.exp_date;
  const producePrice = produce?.price;
  const [name, setName] = useState(produceName);
  const [quantity, setQuantity] = useState(produceQuantity);
  const [weight, setWeight] = useState(produceWeight);
  const [description, setDescription] = useState(produceDescription);
  const [imageUrl, setImageUrl] = useState(produceImageUrl);
  const [expDate, setExpDate] = useState(produceExpDate);
  const [price, setPrice] = useState(producePrice);
  const navigate = useNavigate();

  const [updateProduce, result] = useUpdateProduceMutation({
    user_id,
    produce_id,
  });
  const [deleteProduce, deleteResult] = useDeleteProduceMutation({
    user_id,
    produce_id,
  });

  const [isDecorative, setIsDecorative] = React.useState(true);
  const handleChangeDecorative = (event) => {
    setIsDecorative(event.target.checked);
  };

  const [isAvailable, setIsAvailable] = React.useState(true);
  const handleChangeAvailable = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(value);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleImageUrlChange = (event) => {
    const value = event.target.value;
    setImageUrl(value);
  };

  const handleExpDateChange = (event) => {
    const value = event.target.value;
    setExpDate(value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleReset = () => {
    setName("");
    setQuantity("");
    setWeight("");
    setDescription("");
    setImageUrl("");
    setExpDate("");
    setIsDecorative(false);
    setIsAvailable(false);
    setPrice("");
  };

  useEffect(() => {
    if (result.isSuccess || deleteResult.isSuccess) {
      handleReset();
      navigate(`/users/${user_id}`);
    }
  }, [result.isSuccess, deleteResult.isSuccess, navigate, user_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateProduce({
      user_id,
      produce_id,
      data: {
        name: name,
        quantity: parseInt(quantity),
        weight: parseInt(weight),
        description: description,
        image_url: imageUrl,
        exp_date: expDate,
        is_decorative: isDecorative,
        is_available: isAvailable,
        price: parseFloat(price),
      },
    });
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    deleteProduce({
      user_id,
      produce_id,
    });
  };

  return (
    <>
      <Lottie
        className="fixed top-0 -z-10 w-auto h-auto min-w-full min-h-full max-w-none opacity-25"
        animationData={goldenplantas}
      />
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-9 sm:py-215 lg:max-w-20xl lg:px-8">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Update A Produce
              </h1>
              <form id="update-produce-form">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    value={quantity}
                    onChange={handleQuantityChange}
                    placeholder="Quantity"
                    required
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label htmlFor="weight">Weight</label>
                  <input
                    value={weight}
                    onChange={handleWeightChange}
                    placeholder="Weight"
                    required
                    type="text"
                    name="weight"
                    id="weight"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label htmlFor="description">Description</label>
                  <input
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                    required
                    type="text"
                    name="description"
                    id="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label htmlFor="imageUrl">Image Url</label>
                  <input
                    value={imageUrl}
                    onChange={handleImageUrlChange}
                    placeholder="imageUrl"
                    required
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input
                    value={expDate}
                    onChange={handleExpDateChange}
                    placeholder="Expiration Date"
                    required
                    type="date"
                    name="expirationDate"
                    id="expirationDate"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={isAvailable}
                          onChange={handleChangeAvailable}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label="Available"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={isDecorative}
                          onChange={handleChangeDecorative}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label="Decorative"
                    />
                  </FormGroup>
                </div>

                <div className="pb-4">
                  <label htmlFor="price">Price</label>
                  <input
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="price"
                    required
                    type="text"
                    name="price"
                    id="price"
                    pattern="^\d{1,3}(?:,\d{3})*\.\d{2}$"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-[#D8E4C2] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-[50%]"
                  >
                    Update Produce
                  </button>

                  <button
                    onClick={handleDelete}
                    type="submit"
                    className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-[50%]"
                  >
                    Delete Produce
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduceFrom;
