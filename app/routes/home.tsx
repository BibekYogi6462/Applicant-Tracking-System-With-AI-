import type { Route } from "./+types/home";
import Navbar from "../components/Navbar"
import {resumes} from "../../constants"
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "योग्यता" },
    { name: "description", content: "Easy recruit the best candidate" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const navigate  = useNavigate();


   useEffect( () => {
     if(!auth.isAuthenticated) navigate('/auth?next=/');
   }, [auth.isAuthenticated])


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
   
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Your Smart Hiring Companion</h1>
        <h2 className="text-gradient">Shortlist resumes. Get AI insights. Hire better</h2>
      </div>
    {resumes.length> 0 && (
      <div className="resumes-section">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}

    </div>
    )}
    </section>
    </main>
}
