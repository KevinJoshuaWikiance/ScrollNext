

// const Headings = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-2xl mb-6 mt-6  hover:underline ">
//       Lorem Ipsum
//       </h1>
//       <h2 className="font-semibold text-lg mb-6 mt-6 hover:underline  ">
//       What is Lorem Ipsum?
//       </h2>
//       <h2 className="font-semibold text-lg mb-6 mt-6  hover:underline ">
//         Services
//       </h2>
//       <h2 className="font-semibold text-lg mb-6 mt-6 hover:underline   ">
//         Contact Us
//       </h2>
//       <h2 className="font-semibold text-lg mb-6 mt-6  hover:underline  ">
//         Our Mission
//       </h2>
//     </div>
//   )
// }

// export default Headings

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 11 }).map(
  (_, i, a) => `Topic.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-[650px] my-2 w-[350px] rounded-md border bg-blue-950 text-white">
      <div className="p-4 mx-8">
        <h4 className="my-6 text-2xl font-medium leading-none">Headings</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-lg hover:underline hover:text-white hover:rounded-xl hover:cursor-pointer">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
