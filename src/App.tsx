import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import Contents from './components/Content';
import   { ScrollAreaDemo } from './components/Headings';
import MainSideBar from './components/MainSidebar';


function App() {
  const { ref, inView } = useInView({ threshold: 0.2 }); // Adjust threshold as needed
  const animation = useAnimation();


  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    } else {
      animation.start({ opacity: 0, y: 50 });
    }
  }, [inView, animation]);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
  <div className="col-span-3 bg-white p-4">
    <MainSideBar/>
  </div>
  <motion.div
        ref={ref}
        className="col-span-6 p-4 overflow-y-scroll max-h-[99vh] "
        animate={animation}
        initial={{ opacity: 0, y: 50 }}
      >
        <Contents/>
        
    </motion.div>
  <div className="col-span-3 bg-white p-4 overflow-hidden  ">
    <ScrollAreaDemo/>
    {/* <Headings/> */}
    
  </div>
</div>


    </>
  )
}

export default App
