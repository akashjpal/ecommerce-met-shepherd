import Link from "next/link"
export default function Category({category}){
    return (
                    <div className="flex flex-row  flex-wrap ">
                        {
                            category.map((item) => {
                                return (
                                    <div key={item.id} className="my-3 mx-1">
                                        <Link href={item.url} className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-white  font-[2rem] rounded-md">{item.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
    )
}