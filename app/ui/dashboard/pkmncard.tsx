  import { inter } from '@/app/ui/fonts';
  
  export function PkmnCard({ 
    name,
    code,
    set,
    price,
    image,
  }: {
    name: string;
    code: string;
    set: string;
    price: number;
    image: string;
}) {
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className={`${inter.className}
                    truncate rounded-xl bg-gray-600 px-4 py-8 text-center text-2xl`}>
            <img src={image}></img>
            <div className="flex p-4">
                <h3 className="ml-2 text-lg font-medium">{name}</h3>
                </div>
                <p className="ml-2 text-sm font-medium">
                {code} {set} ${price}
                </p>
            </div>
        </div>
        
    );
  }
