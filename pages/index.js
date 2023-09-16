import SunnySideHeader from "../components/header";
import SunnysideContent from "../components/content";
import { useEffect } from "react";

const SunnySide = ()=>(
    useEffect(() => {
      document.title = "Frontend Mentor | Sunnyside agency landing page"
    }, []),
    <>
        <SunnySideHeader />
        <SunnysideContent />
    </>
)

export default SunnySide