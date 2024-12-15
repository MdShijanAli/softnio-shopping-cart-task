export default function SizeBox({size = "S", price = "69", isActive = false, onSelect}){
    return (
        <div onClick={onSelect} className={`px-3 py-1 inline-block border ${isActive && "border-[#6576FF]"}`}>
          <span className="text-[13px] text-[#6576FF] font-semibold">{size}</span>
          <span className="ml-2 text-[#8091A7] text-[13px] font-semibold">${price}</span>
        </div>
    );
}