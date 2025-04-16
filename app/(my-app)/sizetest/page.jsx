import Image from "next/image";

export default function SizeTestPage() {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      {/* Without sizes */}
      <div className="relative w-full max-w-2xl h-64 border border-red-500">
        <Image
          src="/stock.jpg"
          alt="No sizes"
          fill
          className="object-cover"
          priority
        />
        <p className="absolute top-2 left-2 bg-white text-black text-sm px-2 py-1">No sizes</p>
      </div>

      {/* With sizes */}
      <div className="relative w-full max-w-2xl h-64 border border-green-500">
        <Image
          src="/stock.jpg"
          alt="With sizes"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <p className="absolute top-2 left-2 bg-white text-black text-sm px-2 py-1">With sizes</p>
      </div>
    </div>
  );
}