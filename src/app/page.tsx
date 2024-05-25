"use client";
import Header from '@/components/Header/Header';
import About from '@/components/About/about'
import LearnUseImage from '@/components/UseImage'

export default function Home() {
  return (
    <main>
        <div>
            <Header />
            <LearnUseImage />
            <About />
        </div>
    </main>
  );
}




