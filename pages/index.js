import SunnySideHeader from "../components/header";
import SunnysideContent from "../components/content";
import SunnysideFooter from '../components/footer'
import { useEffect } from "react";

const SunnySide = ()=>(
    useEffect(() => {
      document.title = "Frontend Mentor | Sunnyside agency landing page"
    }, []),
    <>
        <SunnySideHeader />
        <SunnysideContent />
        <SunnysideFooter />
    </>
)

export default SunnySide