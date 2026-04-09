import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import Problems from './components/Problems'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'

gsap.registerPlugin(ScrollTrigger)

/* ─── Animated divider between sections ─── */
function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.querySelector('.divider-line'),
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%' },
        }
      )
      gsap.fromTo(
        ref.current!.querySelector('.divider-glow'),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'sine.inOut',
          scrollTrigger: { trigger: ref.current, start: 'top 90%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="relative py-2">
      <div className="divider-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[60px] bg-purple-500/[0.04] blur-[40px] rounded-full" />
      <div className="divider-line mx-auto max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent origin-center" />
    </div>
  )
}
import Results from './components/Results'

function App() {
  return (
    <div className="bg-[#05000a] min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <Problems />
      <SectionDivider />
      <Solutions />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <Results />
    </div>
  )
}

export default App
