import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  ScaleIcon,
  HashtagIcon,
  CheckBadgeIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function formatExpDate(expdate) {
  const date = new Date(expdate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}

function ProduceDetail({ singleProduce }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/posts");
  };

  console.log(singleProduce, "this is the single produce");

  return (
    <Card className="max-w-full shadow-lg flex flex-col w-full rounded-lg bg-byob-cyan pb-4">
      <div className="flex flex-row">
        <CardHeader floated={false} color="blue-gray" className="w-1/4">
          <img
            src={singleProduce.image_url}
            alt="produce"
            className="h-full w-full bg-cover"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full object-contain bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>

        <div className="w-3/4">
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Tooltip content="Produce name">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-large font-extrabold"
                >
                  <span>
                    Produce name: {singleProduce ? singleProduce.name : ""}
                  </span>
                </Typography>
              </Tooltip>
            </div>
            <Tooltip content="Produce description">
              <Typography color="gray" className="font-medium font-bold">
                <span>{singleProduce ? singleProduce.description : ""}</span>
              </Typography>
            </Tooltip>

            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              <Tooltip content="Price">
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <CurrencyDollarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  <span>Price: {singleProduce ? singleProduce.price : ""}</span>
                </Typography>
              </Tooltip>

              <Tooltip content="Expiration Date">
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <CalendarDaysIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  <span>
                    Expiration Date:{" "}
                    {singleProduce ? formatExpDate(singleProduce.exp_date) : ""}
                  </span>
                </Typography>
              </Tooltip>

              <Tooltip content="Decorative item">
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <PhotoIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  <span>
                    Decorative item:{" "}
                    {singleProduce
                      ? singleProduce.is_decorative.toString()
                      : ""}
                  </span>
                </Typography>
              </Tooltip>

              <Tooltip content="Available">
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <CheckBadgeIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  <span>
                    Available:{" "}
                    {singleProduce ? singleProduce.is_available.toString() : ""}
                  </span>
                </Typography>
              </Tooltip>

              <Tooltip content="Quantity">
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <HashtagIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  <span>
                    Quantity: {singleProduce ? singleProduce.quantity : ""}
                  </span>
                </Typography>
              </Tooltip>

              <Tooltip content="Product weight">
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <ScaleIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  <span>
                    Product weight: {singleProduce ? singleProduce.weight : ""}
                  </span>
                </Typography>
              </Tooltip>
            </div>
          </CardBody>

          <CardFooter className="pt-3 w-full flex flex-row gap-1.5">
            <Button
              size="lg"
              fullWidth={true}
              onClick={handleClick}
              className="py-3 bg-[#D8E4C2] text-[#203330]"
            >
              Create Post
            </Button>
            <Button
              size="lg"
              fullWidth={true}
              className="py-3 bg-[#D8E4C2] text-[#203330]"
            >
              <Link
                to={`/users/${singleProduce.user.user_id}/produce/${singleProduce.produce_id}/update`}
              >
                Update Produce
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default ProduceDetail;
