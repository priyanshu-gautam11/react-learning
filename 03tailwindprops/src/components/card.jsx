function Card() {
  return (
    <div className="w-60 overflow-hidden rounded-xl bg-black text-white shadow-lg">
      <img
        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
        alt="Bored Vansh NFT"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-bold leading-tight">
              Bored Vansh NFT
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              #345
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">Price</p>
            <p className="font-bold">0.01 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;