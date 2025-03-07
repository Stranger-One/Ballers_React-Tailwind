import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setItems(res.data.products);
      setFilteredItems(res.data.products);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        className="bg-red-500 hover:bg-red-600 text-white p-2 mb-4 rounded cursor-pointer"
      >
        Logout
      </button>
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="w-full mx-auto border rounded-xl overflow-hidden flex items-center mb-10">
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          placeholder="Search Your Products here ...."
          className="w-full h-10 px-4 py-6 outline-none border-none text-lg"
        />
        <button className="p-2 cursor-pointer">
          <IoSearch size={20} />
        </button>
      </div>
      {!search && (
        <div className="mb-10">
          <h2 className="text-3xl my-4 font-semibold">Featured Products</h2>
          <div className="relative">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 40,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
            >
              {items.map((item) => (
                <SwiperSlide
                  key={item.id}
                  onClick={() => navigate(`/details/${item.id}`)}
                  className=""
                >
                  <div
                    key={item.id}
                    className="border p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer group h-full"
                    onClick={() => navigate(`/details/${item.id}`)}
                  >
                    <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                      {item.title}
                    </h2>
                    <div className="w-full h-fit">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full object-cover rounded mb-2 group-hover:scale-110 duration-200"
                      />
                    </div>
                    <p className="text-gray-700 line-clamp-4">
                      {item.description}
                    </p>
                    <p className="text-gray-900 font-bold mt-2">
                      ${item.price}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
              <IoIosArrowBack size={30} />
            </div>
            <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
              <IoIosArrowForward size={30} />
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <h1 className="text-3xl font-bold col-span-full">All Products</h1>

        {filteredItems.length ? filteredItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => navigate(`/details/${item.id}`)}
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <div className="w-full h-fit">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full object-cover rounded mb-2 group-hover:scale-110 duration-200"
              />
            </div>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold mt-2">${item.price}</p>
          </div>
        )) : (
          <p className="text-gray-700 text-center mt-10 col-span-full text-2xl">No items found for "{search}"</p>
        )}
      </div>
    </div>
  );
};

export default Home;
