import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import blueImg from "./assets/images/blue.png"
import cyanImg from "./assets/images/cyan.png"
import blackImg from "./assets/images/lg-a 3.png"
import productImg from "./assets/images/product-gallery.png"
import CheckoutModal from "./components/CheckoutModal"
import SizeBox from "./components/SizeBox"
import BlankStar from "./icons/BlankStar"
import HalfStar from "./icons/HalfStar"
import { LoveIcon } from "./icons/LoveIcon"
import StarIcon from "./icons/StarIcon"
function App() {
  const [selectColor, setSelectColor] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [selectSize, setSelectSize] = useState(sizeLists[0].id);
  const [image, setImage] = useState(productImg)

  const colors = [
    {
      id: 1,
      name: "Purple",
      color: "#816BFF"
    },
    {
      id: 2,
      name: "Cyan",
      color: "#4B97D3"
    },
    {
      id: 3,
      name: "Blue",
      color: "#3B4747"
    },
    {
      id: 4,
      name: "Black",
      color: "#1FCEC9"
    }
  ]

  const sizeLists = [
    {
      id: 1,
      size: "S",
      price: "69"
    },
    {
      id: 2,
      size: "M",
      price: "79"
    },
    {
      id: 3,
      size: "L",
      price: "89"
    },
    {
      id: 4,
      size: "XL",
      price: "99"
    }
  ]

  useEffect(() => {
    if (selectColor?.id === 1) {
      setImage(productImg);
    }
    else if (selectColor?.id === 2) {
      setImage(cyanImg);
    }
    else if (selectColor?.id === 3) {
      setImage(blueImg);
    }
    else if (selectColor?.id === 4) {
      setImage(blackImg);
    }
    else {
      setImage(productImg);
    }
  }, [selectColor])

  const increment = () => setQuantity(Number(quantity) + 1);
  const decrement = () => setQuantity(Number(quantity) > 0 ? Number(quantity) - 1 : 0);

  const handleShowCheckout = () => {
    if (quantity < 1) {
      toast.error("Please select quantity");
      return
    }
    setShowCheckout(true);
  }

  const handleShowCheckoutModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      toast.success("Your Order has been placed");
      setShowModal(false);
      setIsLoading(false);
      setQuantity(0);
      setShowCheckout(false);
    }, 3000)
  }

  return (
    <div className="flex justify-center items-center h-[100vh] relative">
      <div className="grid md:grid-cols-2 gap-14 border w-[1320px] h-[720px] items-center mx-6 md:mx-0">
        <div>
          <img className="w-full h-full overflow-hidden" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-[40px] font-semibold">Classy Modern Smart watch</h1>
          <span className="flex items-center gap-2 mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <HalfStar />
            <BlankStar />
            <span className="text-[14px]">( 2 Reviews )</span>
          </span>

          <div className="flex gap-3 items-center my-5">
            <span className="line-through text-[20px] text-[#8091A7]">$99.00</span>
            <span className="text-[24px] text-[#6576FF] font-semibold">$79.00</span>
          </div>

          <p className="text-[18px] my-5">
            I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
          </p>

          <div className="flex gap-10">
            <div>
              <p className="text-[14px] text-[#8091A7]">Type</p>
              <p className="text-[16px] text-[#364A63] font-semibold">Watch</p>
            </div>
            <div>
              <p className="text-[14px] text-[#8091A7]">Model Number</p>
              <p className="text-[16px] text-[#364A63] font-semibold">Forerunner 290XT</p>
            </div>
          </div>

          <div className="my-5">
            <h4 className="text-[18px] text-[#364A63] font-semibold">Brand Color</h4>

            <div className="flex items-center gap-3 mt-2">
              {
                colors.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="w-[24px] h-[24px] rounded-full flex justify-center items-center"
                      style={{ border: item?.id === (selectColor?.id || 1) && item?.color && `2px solid ${ item?.color }` }}
                    >
                      <div
                        className="w-[16px] h-[16px] rounded-full cursor-pointer"
                        style={{ backgroundColor: item?.color }}
                        onClick={() => setSelectColor(item)}
                      ></div>
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className="my-5">
            <h4 className="text-[18px] text-[#364A63] font-semibold">Wrist Size</h4>

            <div className="flex gap-2 mt-2 cursor-pointer">
              {sizeLists.map((item) => (
                <SizeBox
                  onSelect={() => setSelectSize(item.id)}
                  key={item.id}
                  size={item.size}
                  price={item.price}
                  isActive={selectSize === item.id}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={decrement}
                className="px-2 py-1 border-r hover:bg-gray-100"
              >
                –
              </button>
              <input className="px-3 py-1 w-10 text-center" min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              <button
                onClick={increment}
                className="px-2 py-1 border-l hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button onClick={handleShowCheckout} className="px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              Add to Cart
            </button>

            <button>
              <LoveIcon className="text-2xl text-gray-400 hover:text-red-500" />
            </button>
          </div>

          {
            showCheckout && (
              <button onClick={handleShowCheckoutModal} class="mt-10 flex items-center justify-between w-[139px] h-[42px] bg-[#FFBB5A] font-semibold rounded-[20px] px-[24px] py-[8px] gap-[10px]">
                <span class="text-[#364A63] text-[16px]">Checkout</span>
                <div class="flex items-center justify-center w-[19px] h-[20px] bg-white rounded-[5px] px-[6px] py-[2px]">
                  <span class="text-black text-[12px]">{quantity}</span>
                </div>
              </button>
            )
          }

          {showModal && <CheckoutModal onSubmit={handleSubmit} onClose={handleCloseModal} isLoading={isLoading} />}

        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default App
